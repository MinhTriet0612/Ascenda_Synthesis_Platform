import { Amentity } from "../../model/Amentity";
import { Hotel } from "../../model/Hotel";
import { ImageStore } from "../../model/ImageStore";
import { Location } from "../../model/Location";
import { PaperFliesQueryDTO } from "../../queryDTOs/PaperFliesQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";

export class PaperFliesQueryMapper implements SupplierQueryMapper {
  private static instance: PaperFliesQueryMapper;

  private constructor() {
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
    const location: Location = new Location();
    const amenities = new Amentity();
    const images = new ImageStore();

    location.setLat(dto?.location?.lat);
    location.setLng(dto?.location?.lng);
    location.setAddress(dto?.location?.address);
    location.setCity(dto?.location?.city);
    location.setCountry(dto?.location?.country);

    amenities.setGeneral(dto?.amenities?.general);
    amenities.setRoom(dto?.amenities?.room);

    images.setRooms(dto?.images?.rooms ? dto.images.rooms.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.caption.trim()
      }
    }) : []);

    images.setAmenities(dto?.images?.amenities ? dto.images.amenities.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.caption.trim()
      }
    }) : []);

    images.setSite(dto?.images?.site ? dto.images.site.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.caption.trim()
      }
    }) : []);



    hotel.id = dto.hotel_id.trim();
    hotel.destination_id = dto?.destination_id;
    hotel.name = dto.hotel_name.trim();
    hotel.location = location;
    hotel.description = dto?.details ? dto.details.trim() : null;
    hotel.amenities = amenities;
    hotel.images = images;
    //   = {
    //   site: dto?.images?.site ? dto.images.site.map(ele => {
    //     return {
    //       link: ele.link.trim(),
    //       description: ele.caption.trim()
    //     }
    //   }) : [],
    //
    //     rooms: dto?.images?.rooms ? dto.images.rooms.map(ele => {
    //       return {
    //         link: ele.link.trim(),
    //         description: ele.caption.trim()
    //       }
    //     }) : [],
    //
    //       amenities: dto?.images?.amenities ? dto.images.amenities.map(ele => {
    //         return {
    //           link: ele.link.trim(),
    //           description: ele.caption.trim()
    //         }
    //       }) : []
    // }


    hotel.booking_conditions = booking_conditions;

    return hotel;
  }
}

