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
}

