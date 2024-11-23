import { HotelStore } from "../../context/HotelStore";
import { Logger } from "../../logger/Logger";
import { PaperFliesQueryMapper } from "../../mapper/impl/PaperFliesQueryMapper";
import { Hotel } from "../../model/Hotel";
import { PaperFliesQueryDTO } from "../../queryDTOs/PaperFliesQueryDTO";
import { Operation } from "../Operation";
import { SupplierOperation } from "../SupplierOperation";


export class PaperFliesOperation extends SupplierOperation implements Operation<HotelStore> {
  public constructor(url: string) {
    super(url);
  }

  public async execute(hotelStore: HotelStore) {
    const rawData: PaperFliesQueryDTO[] = await super.fetchHotelData();
    const hotelsTmp: Hotel[] = rawData.map((dto: PaperFliesQueryDTO) => PaperFliesQueryMapper.getInstance().mapToEntity(dto));

    this.mergeData(hotelsTmp, hotelStore);
  }

  public mergeData(hotelsTmp: Hotel[], hotelStore: HotelStore): void {
    try {
      hotelsTmp.forEach((hotelTmp) => {
        const hotelId = hotelTmp.id;
        if (!hotelStore.data.has(hotelId)) {
          hotelStore.data.set(hotelId, hotelTmp);
          return;
        }

        const hotel = hotelStore.data.get(hotelId);
        hotel.updateHotelData(hotelTmp);

        // just a description overwrite
        if (hotelTmp.description || hotelTmp.description.trim() === '') {
          hotel.description = hotelTmp.description;
        }

        // just a country overwrite
        if (hotelTmp?.location?.country || hotelTmp?.location?.country.trim() === '') {
          hotel.location.country = hotelTmp.location.country;
        }
      });
      Logger.log('INFO', `Successfully merged data from ${this.constructor.name}`);
    }
    catch (error) {
      Logger.log('ERROR', `Failed to merge data from ${this.constructor.name}`);
    }
  }
}
