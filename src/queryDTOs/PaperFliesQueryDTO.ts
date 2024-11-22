import { Amentity } from "../model/Amentity";
import { Location } from "../model/Location";
import { SupplierQueryDTO } from "./SupplierQueryDTO";

export interface PaperFliesQueryDTO extends SupplierQueryDTO {
  hotel_id: string;
  destination_id: number;
  hotel_name: string;
  location: Location;
  details: string;
  amenities: Amentity;
  images: ImageStoreDTO;
  booking_conditions: string[];
}

interface ImageStoreDTO {
  rooms: ImageDTO[];
  site: ImageDTO[];
  amenities: ImageDTO[];
}

interface ImageDTO {
  link: string;
  caption: string;
}


