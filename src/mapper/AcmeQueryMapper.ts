import { Hotel } from "../model/Hotel";
import { Location } from "../model/Location";
import { AcmeQueryDTO } from "../queryDTOs/AcmeQueryDTO";
import { SupplierQueryMapper } from "./SupplierQueryMapper";


export class AcmeQueryMapper implements SupplierQueryMapper {
  private static instance: AcmeQueryMapper;

  constructor() {
    if (AcmeQueryMapper?.instance) {
      return AcmeQueryMapper.instance;
    }
    AcmeQueryMapper.instance = this;
  }

  public mapToEntity(dto: AcmeQueryDTO): Hotel {
    const hotel = new Hotel();
    const location: Location = {
      lat: dto.Latitude ? dto.Latitude : null,
      lng: dto.Longitude ? dto.Longitude : null,
      address: dto.Address.trim(),
      city: dto.City.trim(),
      country: dto.Country.trim()
    }

    hotel.id = dto.Id.trim();
    hotel.destination_id = dto.DestinationId;
    hotel.name = dto.Name.trim()
    hotel.location = location;
    hotel.description = dto.Description.trim();

    return hotel;
  }
}

// const tmpdata = [
//   {
//     "id": "iJhz",
//     "destination_id": 5432,
//     "name": "Beach Villas Singapore",
//     "location": {
//       "lat": 1.264751,
//       "lng": 103.824006,
//       "address": "8 Sentosa Gateway, Beach Villas, 098269",
//       "city": "Singapore",
//       "country": "Singapore"
//     },
//     "description": "Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station.",
//     "amenities": {
//       "general": ["outdoor pool", "indoor pool", "business center", "childcare", "wifi", "dry cleaning", "breakfast"],
//       "room": ["aircon", "tv", "coffee machine", "kettle", "hair dryer", "iron", "bathtub"]
//     },
//     "images": {
//       "rooms": [
//         { "link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg", "description": "Double room" },
//         { "link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/3.jpg", "description": "Double room" },
//         { "link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/4.jpg", "description": "Bathroom" }
//       ],
//       "site": [
//         { "link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/1.jpg", "description": "Front" }
//       ],
//       "amenities": [
//         { "link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg", "description": "RWS" }
//       ]
//     },
//     "booking_conditions": [
//       "All children are welcome. One child under 12 years stays free of charge when using existing beds. One child under 2 years stays free of charge in a child's cot/crib. One child under 4 years stays free of charge when using existing beds. One older child or adult is charged SGD 82.39 per person per night in an extra bed. The maximum number of children's cots/cribs in a room is 1. There is no capacity for extra beds in the room.",
//       "Pets are not allowed.",
//       "WiFi is available in all areas and is free of charge."
//     ]
//   }
// ]

