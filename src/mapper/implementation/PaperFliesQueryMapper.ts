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
    hotel.booking_conditions = booking_conditions;
    hotel.location = locate;

    hotel.id = dto.hotel_id.trim();
    hotel.destination_id = dto?.destination_id;
    hotel.name = dto.hotel_id.trim();

    hotel.images = {
      site: dto.images.site.map(ele => {
        return {
          link: ele.link.trim(),
          description: ele.caption.trim()
        }
      }),

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

    if (hotel?.images?.rooms) {
      hotel.images.rooms = hotel.images.rooms.map(ele => {
        return {
          link: ele?.link.trim(),
          description: ele?.description.trim()
        }
      })
    }


    if (hotel?.images?.site) {
      hotel.images.site = hotel.images.site.map(ele => {
        return {
          link: ele?.link.trim(),
          description: ele?.description.trim()
        }
      })
    }

    // if (hotel?.images?.amenities) {
    //   hotel.images.amenities = hotel.images.amenities.map(ele => {
    //     return {
    //       link: ele?.link.trim(),
    //       description: ele?.description.trim()
    //     }
    //   })
    // }

    // if (hotel?.amenities?.room) {
    //   hotel.amenities.room = hotel.amenities.room.map(ele => ele.trim());
    // }
    //
    // if (hotel?.amenities?.general) {
    //   hotel.amenities.general = hotel.amenities.general.map(ele => ele.trim());
    // }
    return hotel;
  }
}

