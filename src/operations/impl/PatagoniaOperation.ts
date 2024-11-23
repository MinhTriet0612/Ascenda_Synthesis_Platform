import { HotelStore } from "../../context/HotelStore";
import { PatagoniaQueryMapper } from "../../mapper/impl/PatagoniaQueryMapper";
import { Hotel } from "../../model/Hotel";
import { PatagoniaQueryDTO } from "../../queryDTOs/PatagoniaQueryDTO";
import { Operation } from "../Operation";
import { SupplierOperation } from "../SupplierOperation";

export class PatagoniaOperation extends SupplierOperation implements Operation<HotelStore> {

  public constructor(url: string) {
    super(url);
  }

  public async execute(hotelStore: HotelStore) {
    const rawData: PatagoniaQueryDTO[] = await super.fetchHotelData()
    const hotelsTmp: Hotel[] = rawData.map((dto: PatagoniaQueryDTO) => PatagoniaQueryMapper.getInstance().mapToEntity(dto));

    super.mergeData(hotelsTmp, hotelStore);
  }
}

