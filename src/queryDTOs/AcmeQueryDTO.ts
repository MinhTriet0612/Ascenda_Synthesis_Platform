import { SupplierQueryDTO } from "./SupplierQueryDTO";


export interface AcmeQueryDTO extends SupplierQueryDTO {
  Id: string;
  DestinationId: number;
  Name: string;
  Latitude: number;
  Longitude: number;
  Address: string;
  City: string;
  Country: string;
  PostalCode: string;
  Description: string;
  Facilities: string[];
}

