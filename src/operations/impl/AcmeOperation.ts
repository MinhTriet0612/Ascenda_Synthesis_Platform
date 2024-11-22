import { MapperContext } from "../../mapper/MapperContext";
import { MapperType } from "../../mapper/type/MapperType";
import { Hotel } from "../../model/Hotel";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { Operation } from "../IOperation";

export class AcmeOperation implements Operation<Map<String, Hotel>> {
  private acmeURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';

  public async execute(hotelStore: Map<String, Hotel>) {
    const rawData = await this.fetchHotelData(this.acmeURL);
    const mapper = new MapperContext().setMapper(MapperType.Acme);

    const hotels = rawData.map((dto: AcmeQueryDTO) => mapper.executeMapping(dto));

    hotels.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!hotelStore.has(hotelId)) {
        hotelStore.set(hotelId, hotelTmp);
      }

      const hotel = hotelStore.get(hotelId);
      const location = hotel.location;
      const locationTmp = hotelTmp.location;
      if (!location.address)
        location.address = locationTmp.address;

      if (!location.city)
        location.city = locationTmp.city;

      if (!location.country)
        location.country = locationTmp.country;

      if (!location.lat)
        location.lat = locationTmp.lat;

      if (!location.lng)
        location.lng = locationTmp.lng;

      if (!hotel.description)
        hotel.description = hotelTmp.description;

      if (!hotel.name)
        hotel.name = hotelTmp.name;

      if (!hotel.location)
        hotel.location = location

    });


  }


  // const hehe: AcmeQueryDTO = rawData[0];
  // console.log(hehe.Id);
  // console.log(hehe.City);
  // console.log(hehe.Country);
  // console.log(hehe.Description);
  // console.log(hehe.DestinationId);
  // console.log(hehe.Facilities);
  // console.log(hehe.Latitude);
  // console.log(hehe.Longitude);
  // console.log(hehe.Name);
  // console.log(hehe.PostalCode);
  // console.log(hehe.Address);

  private async fetchHotelData(url: String): Promise<AcmeQueryDTO[]> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}
