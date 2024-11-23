import { HotelStore } from "../context/HotelStore";
import { Logger } from "../logger/Logger";
import { Hotel } from "../model/Hotel";

export abstract class SupplierOperation {
  private url: string;

  public constructor(url: string) {
    this.url = url;
  }

  public async fetchHotelData() {

    Logger.log('INFO', `Fetching data from ${this.url}`);
    return fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${this.url}`);
        }
        return response.json();
      })
      .catch((error) => {
        Logger.log('ERROR', `Failed to fetch data from ${this.url}`);
        return [];
      });
  }

  public mergeData(hotelsTmp: Hotel[], hotelStore: HotelStore) {
    try {
      hotelsTmp.forEach((hotelTmp) => {
        const hotelId = hotelTmp.id;
        if (!hotelStore.data.has(hotelId)) {
          hotelStore.data.set(hotelId, hotelTmp);
          return;
        }
        const hotel = hotelStore.data.get(hotelId);
        hotel.updateHotelData(hotelTmp);
      });
      Logger.log('INFO', `Successfully merged data from ${this.url}`);
    }
    catch (error) {
      Logger.log('ERROR', `Failed to merge data from ${this.url}`);
    }

  }
}

