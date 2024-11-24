import { Hotel } from "../model/Hotel";
import { Location } from "../model/Location";
import { AcmeQueryDTO } from "../queryDTOs/AcmeQueryDTO";


export class AcmeQueryMapper {

  public static mapToEntity(dto: AcmeQueryDTO): Hotel {
    const hotel = new Hotel();
    const location: Location = new Location();
    location.setLat(dto.Latitude);
    location.setLng(dto.Longitude);
    location.setAddress(dto.Address);
    location.setCity(dto.City);
    location.setCountry(dto.Country);

    hotel.setId(dto.Id);
    hotel.setDestinationId(dto.DestinationId);
    hotel.setName(dto.Name);
    hotel.setLocation(location);
    hotel.setDescription(dto.Description);

    return hotel;
  }
}

