import { SupplierQueryDTO } from "../queryDTOs/SupplierQueryDTO";


export abstract class SupplierOperation {
  private url: string;

  public constructor(url: string) {
    this.url = url;
  }

  public async fetchHotelData(): Promise<any> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

