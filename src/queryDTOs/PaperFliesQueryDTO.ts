import { Amentity } from "../model/Amentity";
import { ImageStore } from "../model/ImageStore";

export interface PaperFliesQueryDTO {
  hotel_id: string;
  destination_id: number;
  hotel_name: string;
  location: Location;
  details: string;
  amenities: Amentity;
  images: ImageStore;
  booking_conditions: string[];
}
