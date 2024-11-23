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
      this.name = name;
    }
  }

  public setAmenities(amenities: Amentity): void {
    if (!amenities) {
      return;
    }

    this.amenities.setGeneral(amenities.general);
    this.amenities.setRoom(amenities.room);
  }

  public setImages(images: ImageStore): void {
    if (!images) {
      return;
    }

    if (!this?.images)
      this.images = images;

    if ((!this?.images?.site && this?.images?.site.length === 0) && images?.site)
      this.images.site = images.site;

    if ((!this?.images?.rooms || this?.images?.rooms.length === 0) && images?.rooms)
      this.images.rooms = images.rooms;


    if ((!this?.images?.amenities || this?.images?.amenities.length === 0) && images?.amenities) {
      this.images.amenities = images.amenities;
    }
  }

  public setBookingConditions(booking_conditions: string[]): void {
    if ((!this?.booking_conditions || this?.booking_conditions.length === 0) && booking_conditions)
      this.booking_conditions = booking_conditions
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
