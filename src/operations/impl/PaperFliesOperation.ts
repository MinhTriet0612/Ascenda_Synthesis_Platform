import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/type/MapperType";
import { Hotel } from "../../model/Hotel";
import { PaperFliesQueryDTO } from "../../queryDTOs/PaperFliesQueryDTO";
import { Operation } from "../IOperation";


export class PaperFliesOperation implements Operation<Map<String, Hotel>> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';

  public async execute(hotelStore: Map<String, Hotel>) {
    const data: PaperFliesQueryDTO[] = await this.fetchHotelData(this.patagoniaURL);
    const mapper: MapperContext = new MapperContext().setMapper(MapperType.PaperFlies);


    const hotels: Hotel[] = data.map((dto: PaperFliesQueryDTO) => mapper.executeMapping(dto));

    hotels.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!hotelStore.has(hotelId)) {
        hotelStore.set(hotelId, hotelTmp);
        return;
      }

      const hotel = hotelStore.get(hotelId);
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

  private async fetchHotelData(url: String): Promise<PaperFliesQueryDTO[]> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
