import { Amentity } from "./Amentity";
import { ImageStore } from "./ImageStore";
import { Location } from "./Location";

export class Hotel {
  id: String;
  destination_id: number;
  name: String;
  location: Location;
  description: String;
  amenities: Amentity;
  images: ImageStore;
  booking_conditions: String[];

  constructor() { }

  setLocation(locationTmp: Location): void {
    const location: Location = this?.location;
    if (!location)
      this.location = locationTmp
    if (!location?.address)
      location.address = locationTmp.address;
    if (!location?.city)
      location.city = locationTmp.city;
    if (!location?.country)
      location.country = locationTmp.country;
    if (!location?.lat)
      location.lat = locationTmp.lat;
    if (!location?.lng)
      location.lng = locationTmp.lng;
  }

  setDescription(description: String): void {
    if (!this?.description && description)
      this.description = description;
  }

  setName(name: String): void {
    if (!this?.name && name)
      this.name = name;
  }

  setAmenities(amenities: Amentity): void {
    if (!this?.amenities && amenities)
      this.amenities = amenities;

    if (!this?.amenities?.general && amenities.general)
      this.amenities.general = amenities.general;

    if (!this?.amenities?.room && amenities.room)
      this.amenities.room = amenities.room;
  }

  setImages(images: ImageStore): void {
    if (!this?.images && images)
      this.images = images;

    if (!this?.images?.site && images.site)
      this.images.site = images.site;

    if (!this?.images?.rooms && images.rooms)
      this.images.rooms = images.rooms;

    if (!this?.images?.amenities && images.amenities)
      this.images.amenities = images.amenities;
  }

  setBookingConditions(booking_conditions: String[]): void {
    if (!this?.booking_conditions && booking_conditions)
      this.booking_conditions = booking_conditions
  }

  public updateHotelData(hotelTmp: Hotel): void {
    this.setLocation(hotelTmp.location);
    this.setDescription(hotelTmp.description);
    this.setName(hotelTmp.name);
    this.setAmenities(hotelTmp.amenities);
    this.setImages(hotelTmp.images);
    this.setBookingConditions(hotelTmp.booking_conditions);

  }
}

