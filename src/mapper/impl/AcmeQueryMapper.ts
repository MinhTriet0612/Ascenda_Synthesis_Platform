import { Hotel } from "../../model/Hotel";
import { Location } from "../../model/Location";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";


export class AcmeQueryMapper implements SupplierQueryMapper {
  private static instance: AcmeQueryMapper;

  private constructor() {
    if (AcmeQueryMapper?.instance) {
      return AcmeQueryMapper.instance;
    }
    AcmeQueryMapper.instance = this;
  }

  public static getInstance(): AcmeQueryMapper {
    if (AcmeQueryMapper?.instance) {
      return AcmeQueryMapper.instance;
    }
    AcmeQueryMapper.instance = new AcmeQueryMapper();
    return AcmeQueryMapper.instance;
  }

  public mapToEntity(dto: AcmeQueryDTO): Hotel {
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

