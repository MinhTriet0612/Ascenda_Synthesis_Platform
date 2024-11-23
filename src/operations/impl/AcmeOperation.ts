import { HotelStore } from "../../context/HotelStore";
import { AcmeQueryMapper } from "../../mapper/impl/AcmeQueryMapper";
import { Hotel } from "../../model/Hotel";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { Operation } from "../Operation";
import { SupplierOperation } from "../SupplierOperation";

export class AcmeOperation extends SupplierOperation implements Operation<HotelStore> {

  public constructor(url: string) {
    super(url);
  }

  public async execute(hotelStore: HotelStore) {
    const rawData: AcmeQueryDTO[] = await super.fetchHotelData();
    const hotelsTmp: Hotel[] = rawData.map((dto: AcmeQueryDTO) => AcmeQueryMapper.getInstance().mapToEntity(dto));

    super.mergeData(hotelsTmp, hotelStore);
  }
}
