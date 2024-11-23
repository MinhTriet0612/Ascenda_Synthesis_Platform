import { HotelStoreContext } from "../../context/HotelStoreContext";
import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/constrains/MapperType";
import { Hotel } from "../../model/Hotel";
import { PaperFliesQueryDTO } from "../../queryDTOs/PaperFliesQueryDTO";
import { Operation } from "../Operation";
import { SupplierOperation } from "../SupplierOperation";


export class PaperFliesOperation extends SupplierOperation implements Operation<HotelStoreContext> {
  public constructor(url: string) {
    super(url);
  }

  public async execute(ctx: HotelStoreContext) {
    const data: PaperFliesQueryDTO[] = await super.fetchHotelData();

    const mapper: MapperContext = new MapperContext().setMapper(MapperType.PaperFlies);

    const hotels: Hotel[] = data.map((dto: PaperFliesQueryDTO) => mapper.executeMapping(dto));

    hotels.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!ctx.hotelStore.has(hotelId)) {
        ctx.hotelStore.set(hotelId, hotelTmp);
        return;
      }

      const hotel = ctx.hotelStore.get(hotelId);
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

  }

}
