import { HotelStoreContext } from "../../context/HotelStoreContext";
import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/constrains/MapperType";
import { Hotel } from "../../model/Hotel";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { Operation } from "../Operation";

export class AcmeOperation implements Operation<HotelStoreContext> {
  private acmeURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';

  public async execute(ctx: HotelStoreContext) {
    const rawData: AcmeQueryDTO[] = await this.fetchHotelData(this.acmeURL);
    const mapper: MapperContext = new MapperContext().setMapper(MapperType.Acme);

    const hotels: Hotel[] = rawData.map((dto: AcmeQueryDTO) => mapper.executeMapping(dto));

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

  private async fetchHotelData(url: String): Promise<AcmeQueryDTO[]> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
