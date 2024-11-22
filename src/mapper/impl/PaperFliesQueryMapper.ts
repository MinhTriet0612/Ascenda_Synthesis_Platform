import { Hotel } from "../../model/Hotel";
import { Location } from "../../model/Location";
import { PaperFliesQueryDTO } from "../../queryDTOs/PaperFliesQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";

export class PaperFliesQueryMapper implements SupplierQueryMapper {
  private static instance: PaperFliesQueryMapper;

  constructor() {
    if (PaperFliesQueryMapper?.instance) {
      return PaperFliesQueryMapper.instance;
    }
    PaperFliesQueryMapper.instance = this;
  }

  public static getInstance(): PaperFliesQueryMapper {
    if (PaperFliesQueryMapper?.instance) {
      return PaperFliesQueryMapper.instance;
    }
    PaperFliesQueryMapper.instance = new PaperFliesQueryMapper();
    return PaperFliesQueryMapper.instance
  }

  public mapToEntity(dto: PaperFliesQueryDTO): Hotel {
    const hotel = new Hotel();
    const booking_conditions = dto?.booking_conditions.map(ele => ele.trim());
    const locate: Location = {
      lat: dto.location.lat ? dto.location.lat : null,
      lng: dto.location.lng ? dto.location.lng : null,
      address: dto.location?.address ? dto.location.address.trim() : null,
      city: dto.location?.city ? dto.location.city.trim() : null,
      country: dto.location?.country ? dto.location.country.trim() : null
    }

    hotel.id = dto.hotel_id.trim();
    hotel.destination_id = dto?.destination_id;
    hotel.name = dto.hotel_name.trim();
    hotel.location = locate;
    hotel.description = dto?.details ? dto.details.trim() : null;
    hotel.amenities = {
      general: dto?.amenities?.general ? dto.amenities.general.map(ele => ele.trim()) : [],
      room: dto?.amenities?.room ? dto.amenities.room.map(ele => ele.trim()) : []
    }

    hotel.images = {
      site: dto?.images?.site ? dto.images.site.map(ele => {
        return {
          link: ele.link.trim(),
          description: ele.caption.trim()
        }
      }) : [],

      rooms: dto?.images?.rooms ? dto.images.rooms.map(ele => {
        return {
          link: ele.link.trim(),
          description: ele.caption.trim()
        }
      }) : [],

      amenities: dto?.images?.amenities ? dto.images.amenities.map(ele => {
        return {
          link: ele.link.trim(),
          description: ele.caption.trim()
        }
      }) : []
    }

    hotel.booking_conditions = booking_conditions;

    return hotel;
  }
}
