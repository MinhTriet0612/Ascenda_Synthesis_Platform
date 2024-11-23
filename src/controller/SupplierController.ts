import { HotelStore } from "../context/HotelStore";
import { SupplierOperationFactory } from "../factory/SupplierFactory";
import { Hotel } from "../model/Hotel";
import { Pipeline } from "../pipeline/Pipeline";

export class SupplierController {

  private hotelStore: HotelStore;
  private pipeline: Pipeline<HotelStore>;

  public constructor() {
    this.hotelStore = {
      data: new Map<string, Hotel>()
    }
    this.pipeline = new Pipeline<HotelStore>();
  }

  public addUrlQuery(url: string): this {
    this.pipeline.addOperation(SupplierOperationFactory.getOperationFactory(url));
    return this;
  }

  public async startFetching(hotel_ids: string[], destination_ids: number[]): Promise<Hotel[] | []> {
    await this.pipeline.run(this.hotelStore);
    return this.filterByHotelIdsAndDestionationIds(hotel_ids, destination_ids);
  }

  private filterByHotelIdsAndDestionationIds(hotel_ids: string[], destination_ids: number[]): Hotel[] | [] {
    if (hotel_ids.length !== 0) {
      return Array.from(this.hotelStore.data.values())
        .filter((hotel) => hotel_ids.includes(hotel.id))
        .filter((hotel) => destination_ids.includes(hotel.destination_id));
    }

    if (hotel_ids.length === 0 && destination_ids.length === 0) {
      return Array.from(this.hotelStore.data.values());
    }

    return [];
  }
}
