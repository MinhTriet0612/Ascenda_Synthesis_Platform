import { Amentity } from "./Amentity";
import { ImageStore } from "./ImageStore";
import { Location } from "./Location";

export class Hotel {
  id: string;
  destination_id: number;
  name: string;
  location: Location;
  description: string;
  amenities: Amentity;
  images: ImageStore;
  booking_conditions: string[];

  constructor() {
    this.location = new Location();
    this.amenities = new Amentity();
    this.images = new ImageStore();
  }

  public setId(id: string): void {
    if (!this?.id && id) {
      this.id = id.trim();
    }
  }

  public setDestinationId(destination_id: number): void {
    if (!this?.destination_id && destination_id) {
      this.destination_id = destination_id;
    }
  }

  public setLocation(location: Location): void {
    if (!location) {
      this.location = location;
    }

    this.location.setLat(location.lat);
    this.location.setLng(location.lng);
    this.location.setAddress(location.address);
    this.location.setCity(location.city);
    this.location.setCountry(location.country);

  }

  public setDescription(description: string): void {
    if (!this?.description && description) {
      this.description = description;
    }
  }

  public setName(name: string): void {
    if (!this?.name && name) {
      this.name = name.trim();
    }
  }

  public setAmenities(amenities: Amentity): void {
    if (!amenities) {
      return;
    }

    this.amenities.setGeneral(amenities?.general);
    this.amenities.setRoom(amenities?.room);
  }

  public setImages(images: ImageStore): void {
    if (!images) {
      return;
    }

    this.images.setRooms(images?.rooms);
    this.images.setSite(images?.site);
    this.images.setAmenities(images?.amenities);
  }

  public setBookingConditions(booking_conditions: string[]): void {
    if (this?.booking_conditions && this?.booking_conditions.length !== 0) {
      return;
    }

    if (booking_conditions) {
      this.booking_conditions = booking_conditions;
    }
  }

  public updateHotelData(hotelTmp: Hotel): void {
    this.setLocation(hotelTmp.location);
    this.setDescription(hotelTmp.description);
    this.setName(hotelTmp.name);
    this.setImages(hotelTmp.images);
    this.setAmenities(hotelTmp.amenities);
    this.setBookingConditions(hotelTmp.booking_conditions);
  }
}
