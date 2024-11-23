import { SupplierQueryDTO } from "../queryDTOs/SupplierQueryDTO";


export abstract class SupplierOperation {

  public async fetchHotelData(url: String): Promise<any> {
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
  }
}

