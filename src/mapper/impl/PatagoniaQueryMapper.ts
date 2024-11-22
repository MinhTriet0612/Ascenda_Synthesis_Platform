import { Hotel } from "../../model/Hotel";
import { Location } from "../../model/Location";
import { PatagoniaQueryDTO } from "../../queryDTOs/PatagoniaQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";

export class PatagoniaQueryMapper implements SupplierQueryMapper {
  private static instance: PatagoniaQueryMapper;

  constructor() {
    if (PatagoniaQueryMapper?.instance) {
      return PatagoniaQueryMapper.instance;
    }
    PatagoniaQueryMapper.instance = this;
  }

  public static getInstance(): PatagoniaQueryMapper {
    if (PatagoniaQueryMapper?.instance) {
      return PatagoniaQueryMapper.instance;
    }
    PatagoniaQueryMapper.instance = new PatagoniaQueryMapper();
    return PatagoniaQueryMapper.instance;
  }

  public mapToEntity(dto: PatagoniaQueryDTO): Hotel {
    const hotel = new Hotel();

    const location: Location = {
      lat: dto.lat ? dto.lat : null,
      lng: dto.lng ? dto.lng : null,
      address: dto.address ? dto.address.trim() : null,
      city: null,
      country: null
    }

    const amentites = {
      general: [],
      room: dto.amenities ? dto.amenities.map(ele => ele.trim()) : []
    }

    const images = {
      site: [],
      rooms: dto.images.rooms ? dto.images.rooms.map(ele => {
        return {
          link: ele.url.trim(),
          description: ele.description.trim()
        }
      }) : [],

      amenities: dto.images.amenities ? dto.images.amenities.map(ele => {
        return {
          link: ele.url.trim(),
          description: ele.description.trim()
        }
      }) : []

    }

    hotel.id = dto?.id ? dto.id.trim() : null;
    hotel.destination_id = dto?.destination ? dto.destination : null;
    hotel.name = dto?.name ? dto.name.trim() : null;
    hotel.location = location;
    hotel.description = dto?.info ? dto.info.trim() : null;
    hotel.amenities = amentites;
    hotel.images = images;

    return hotel;
  }
}