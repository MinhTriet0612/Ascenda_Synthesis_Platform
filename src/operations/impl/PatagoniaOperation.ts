import { HotelStoreContext } from "../../context/HotelStoreContext";
import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/constrains/MapperType";
import { Hotel } from "../../model/Hotel";
import { PatagoniaQueryDTO } from "../../queryDTOs/PatagoniaQueryDTO";
import { Operation } from "../Operation";
import { SupplierOperation } from "../SupplierOperation";

export class PatagoniaOperation extends SupplierOperation implements Operation<HotelStoreContext> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';

  public async execute(ctx: HotelStoreContext) {
    const rawData: PatagoniaQueryDTO[] = await super.fetchHotelData(this.patagoniaURL)

    const mapper: MapperContext = new MapperContext().setMapper(MapperType.Patagonia);
    const hotels: Hotel[] = rawData.map((dto: PatagoniaQueryDTO) => mapper.executeMapping(dto));

    hotels.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!ctx.hotelStore.has(hotelId)) {
        ctx.hotelStore.set(hotelId, hotelTmp);
        return;
      }

      const hotel = ctx.hotelStore.get(hotelId);
      hotel.updateHotelData(hotelTmp);
    });
  }
}
