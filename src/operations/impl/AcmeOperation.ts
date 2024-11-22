import { Hotel } from "../../model/Hotel";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { Operation } from "../IOperation";

export class AcmeOperation implements Operation<Map<String, Hotel>> {
  private acmeURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';

  public async execute(hotelStore: Map<String, Hotel>) {
    const rawData = await this.fetchHotelData(this.acmeURL);
    // for (const hotel of response) {
    //   hotelStore.set(hotel.Id, hotel);
    // }

    const hehe: AcmeQueryDTO = rawData[0];
    console.log(hehe.Id);
    console.log(hehe.City);
    console.log(hehe.Country);
    console.log(hehe.Description);
    console.log(hehe.DestinationId);
    console.log(hehe.Facilities);
    console.log(hehe.Latitude);
    console.log(hehe.Longitude);
    console.log(hehe.Name);
    console.log(hehe.PostalCode);
    console.log(hehe.Address);

  }

  private async fetchHotelData(url: String): Promise<AcmeQueryDTO[]> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
