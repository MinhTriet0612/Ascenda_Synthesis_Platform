import { Hotel } from "../model/Hotel";
import { SupplierQueryDTO } from "../queryDTOs/SupplierQueryDTO";

export interface SupplierQueryMapper {
  mapToEntity(dto: SupplierQueryDTO): Hotel;
}
