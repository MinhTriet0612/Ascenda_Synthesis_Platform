import { Hotel } from "../../model/Hotel";
import { Operation } from "../IOperation";

export class AcmeOperation implements Operation<Map<String, Hotel>> {
  private acmeURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';

  public async execute(hotelStore: Map<String, Hotel>) {
    const response = await this.fetchHotelData(this.acmeURL);
    for (const hotel of response) {
      hotelStore.set(hotel.Id, hotel);
    }
  }

  private async fetchHotelData(url: String): Promise<any> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
