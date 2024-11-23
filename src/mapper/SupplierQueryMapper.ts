import { Hotel } from "../model/Hotel";

export interface SupplierQueryMapper {
  mapToEntity(dto: any): Hotel;
}

