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
  images: ImageStoreDTO;
}

interface ImageStoreDTO {
  rooms: ImageDTO[];
  amenities: ImageDTO[]
}

interface ImageDTO {
  url: string,
  description: string
}
