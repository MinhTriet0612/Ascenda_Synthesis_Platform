import { PineLine } from "./pineline/PineLine";
import { Hotel } from "./model/Hotel";
import { Operation } from "./operations/IOperation";

class AcmeOperation<Hotel> implements Operation<Hotel> {
  private acmeURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';

  public execute(obj: Hotel) {
    this.fetchHotelData(this.acmeURL).then((data) => {
      console.log(data);
    });
    console.log("AcmeOperation: " + JSON.stringify(obj));
  }

  private async fetchHotelData(url: String): Promise<Hotel> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}

class PatagoniaOperation<Hotel> implements Operation<Hotel> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';

  public execute(obj: Hotel) {
    this.fetchHotelData(this.patagoniaURL).then((data) => {
      console.log(data);
    });
    console.log("PatagoniaOperation: " + JSON.stringify(obj));
  }

  private async fetchHotelData(url: String): Promise<Hotel> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}

class PaperFliesOperation<Hotel> implements Operation<Hotel> {
  private patagoniaURL: String = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';

  public execute(obj: Hotel) {
    this.fetchHotelData(this.patagoniaURL).then((data) => {
      console.log(data);
    });
    console.log("PaperFliesOperation: " + JSON.stringify(obj));
  }

  private async fetchHotelData(url: String): Promise<Hotel> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}

const pineLine = new PineLine<Hotel>();
pineLine.addOperation(new AcmeOperation()).addOperation(new PaperFliesOperation()).addOperation(new PatagoniaOperation());

pineLine.execute(new Hotel());

// const dirs = ['acme', 'patagonia', 'paperflies'];


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


// console.log(tmpdata);
