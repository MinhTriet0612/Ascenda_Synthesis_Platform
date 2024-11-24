import { Amentity } from "../model/Amentity";
import { Hotel } from "../model/Hotel";
import { ImageStore } from "../model/ImageStore";
import { Location } from "../model/Location";
import { PaperFliesQueryDTO } from "../queryDTOs/PaperFliesQueryDTO";

export class PaperFliesQueryMapper {

  public static mapToEntity(dto: PaperFliesQueryDTO): Hotel {
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


    hotel.setId(dto.hotel_id);
    hotel.setDestinationId(dto.destination_id);
    hotel.setName(dto.hotel_name);
    hotel.setLocation(location);
    hotel.setDescription(dto.details);
    hotel.setAmenities(amenities);
    hotel.setImages(images);
    hotel.setBookingConditions(booking_conditions);

    return hotel;
  }
}

