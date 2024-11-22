import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/type/MapperType";
import { Hotel } from "../../model/Hotel";
import { PatagoniaQueryDTO } from "../../queryDTOs/PatagoniaQueryDTO";
import { Operation } from "../IOperation";

export class PatagoniaOperation implements Operation<Map<String, Hotel>> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';

  public async execute(hotelStore: Map<String, Hotel>) {
    const rawData: PatagoniaQueryDTO[] = await this.fetchHotelData(this.patagoniaURL)

    const mapper: MapperContext = new MapperContext().setMapper(MapperType.Patagonia);
    const hotels: Hotel[] = rawData.map((dto: PatagoniaQueryDTO) => mapper.executeMapping(dto));

    hotels.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!hotelStore.has(hotelId)) {
        hotelStore.set(hotelId, hotelTmp);
        return;
      }

      const hotel = hotelStore.get(hotelId);
      hotel.updateHotelData(hotelTmp);
    });

  }

  private async fetchHotelData(url: String): Promise<PatagoniaQueryDTO[]> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
