import { SupplierQueryDTO } from "./SupplierQueryDTO";

export interface PatagoniaQueryDTO extends SupplierQueryDTO {
  id: string;
  destination: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  info: string;
  amenities: string[];
  images: ImageStore;
}

interface ImageStore {
  rooms: Image[];
  amenities: Image[]
}

interface Image {
  url: string,
  description: string
}
