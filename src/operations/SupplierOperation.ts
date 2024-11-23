import { HotelStore } from "../context/HotelStore";
import { Hotel } from "../model/Hotel";

export abstract class SupplierOperation {
  private url: string;

  public constructor(url: string) {
    this.url = url;
  }

  public async fetchHotelData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  public mergeData(hotelsTmp: Hotel[], hotelStore: HotelStore) {
    hotelsTmp.forEach((hotelTmp) => {
      const hotelId = hotelTmp.id;
      if (!hotelStore.data.has(hotelId)) {
        hotelStore.data.set(hotelId, hotelTmp);
        return;
      }
      const hotel = hotelStore.data.get(hotelId);
      hotel.updateHotelData(hotelTmp);
    });
  }
}

