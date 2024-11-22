import { SupplierQueryDTO } from "./SupplierQueryDTO";


export interface AcmeQueryDTO extends SupplierQueryDTO {
  Id: String;
  DestinationId: number;
  Name: String;
  Latitude: number;
  Longitude: number;
  Address: String;
  City: String;
  Country: String;
  PostalCode: String;
  Description: String;
  Facilities: String[];
}

