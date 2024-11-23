import { Amentity } from "../../model/Amentity";
import { Hotel } from "../../model/Hotel";
import { ImageStore } from "../../model/ImageStore";
import { Location } from "../../model/Location";
import { PatagoniaQueryDTO } from "../../queryDTOs/PatagoniaQueryDTO";
import { SupplierQueryMapper } from "../SupplierQueryMapper";

export class PatagoniaQueryMapper implements SupplierQueryMapper {
  private static instance: PatagoniaQueryMapper;

  private constructor() {
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
    const location: Location = new Location();
    const amenities = new Amentity();
    const images = new ImageStore();

    location.setLat(dto.lat);
    location.setLng(dto.lng);
    location.setAddress(dto.address);

    amenities.setGeneral([]);
    amenities.setRoom(dto.amenities);

    images.setSite([]);
    images.setRooms(dto.images.rooms ? dto.images.rooms.map(ele => {
      return {
        link: ele.url.trim(),
        description: ele.description.trim()
      }
    }) : []);
    images.setAmenities(dto.images.amenities ? dto.images.amenities.map(ele => {
      return {
        link: ele.url.trim(),
        description: ele.description.trim()
      }
    }) : []);

    hotel.setId(dto.id);
    hotel.setDestinationId(dto.destination);
    hotel.setName(dto.name);
    hotel.setLocation(location);
    hotel.setDescription(dto.info);
    hotel.setAmenities(amenities);
    hotel.setImages(images);

    return hotel;
  }
}
