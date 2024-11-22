import { Hotel } from "../../model/Hotel";
import { Operation } from "../IOperation";


export class PaperFliesOperation implements Operation<Map<String, Hotel>> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';

  public async execute(obj: Map<String, Hotel>) {
    const data = await this.fetchHotelData(this.patagoniaURL);
    console.log(data[0]);
    // for (const hotel of data) {
    //   obj.set(hotel.id, hotel);
    // }
  }

  private async fetchHotelData(url: String): Promise<any> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
