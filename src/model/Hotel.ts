
export class Hotel {
  id: String;
  destination_id: number;
  name: String;
  location: Location;
  description: String;
  amenities: Amentity[];
  images: ImageStore;
  booking_conditions: String[];
}

export interface Location {
  lat: number;
  lng: number;
  address: String;
  city: String;
  country: String;
}

export interface Amentity {
  general: String[];
  room: String[];
}

export interface ImageStore {
  rooms: Image[];
  site: Image[];
  amenities: Image[];
}

export interface Image {
  link: String;
  description: String;
}
