import { Hotel } from "../../model/Hotel";
import { Operation } from "../IOperation";

export class PatagoniaOperation implements Operation<Hotel> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';

  public async execute(obj: Hotel) {
    this.fetchHotelData(this.patagoniaURL).then((data) => {
      console.log(data);
      obj.destination_id = data.destination_id;
      console.log(data);
    });
    console.log("PatagoniaOperation: " + JSON.stringify(obj));
  }

  private async fetchHotelData(url: String): Promise<Hotel> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
