import { SupplierQueryDTO } from "./SupplierQueryDTO";

export interface PatagoniaQueryDTO extends SupplierQueryDTO {
  id: String;
  destination: number;
  name: String;
  lat: number;
  lng: number;
  address: String;
  info: String;
  amenities: String[];
  images: ImageStore;
}

interface ImageStore {
  rooms: Image[];
  amenities: Image[]
}

interface Image {
  url: String,
  description: String
}
