import { Hotel } from "../../model/Hotel";
import { Location } from "../../model/Location";
import { AcmeQueryDTO } from "../../queryDTOs/AcmeQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";


export class AcmeQueryMapper implements SupplierQueryMapper {
  private static instance: AcmeQueryMapper;

  constructor() {
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
    const location: Location = {
      lat: dto.Latitude ? dto.Latitude : null,
      lng: dto.Longitude ? dto.Longitude : null,
      address: dto.Address.trim(),
      city: dto.City.trim(),
      country: dto.Country.trim()
    }

    hotel.id = dto.Id.trim();
    hotel.destination_id = dto.DestinationId;
    hotel.name = dto.Name.trim()
    hotel.location = location;
    hotel.description = dto.Description.trim();

    return hotel;
  }
}

