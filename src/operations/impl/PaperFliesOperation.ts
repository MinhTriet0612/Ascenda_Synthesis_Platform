import { Hotel } from "../../model/Hotel";
import { Operation } from "../IOperation";


export class PaperFliesOperation implements Operation<Hotel> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';

  public async execute(obj: Hotel) {
    const data = await this.fetchHotelData(this.patagoniaURL);
    obj.destination_id = data[0].destination_id;
  }

  private async fetchHotelData(url: String): Promise<Hotel> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
