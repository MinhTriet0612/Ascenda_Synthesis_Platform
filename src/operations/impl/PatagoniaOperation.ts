import { Hotel } from "../../model/Hotel";
import { Operation } from "../IOperation";

export class PatagoniaOperation implements Operation<Map<String, Hotel>> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';

  public async execute(hotelStore: Map<String, Hotel>) {
    await this.fetchHotelData(this.patagoniaURL).then((data) => {
      console.dir(data, { depth: null });
    });
  }

  private async fetchHotelData(url: String): Promise<any> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
