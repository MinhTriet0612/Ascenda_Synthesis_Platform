import { Hotel } from "../model/Hotel";
import { SupplierQueryDTO } from "../queryDTOs/SupplierQueryDTO";
import { AcmeQueryMapper } from "./implementation/AcmeQueryMapper";
import { PaperFliesQueryMapper } from "./implementation/PaperFliesQueryMapper";
import { SupplierQueryMapper } from "./SupplierQueryMapper";
import { MapperType } from "./type/MapperType";

export class MapperContext {
  private mapper: SupplierQueryMapper;

  constructor() {
  }

  public setMapper(mapperType: MapperType): MapperContext {
    switch (mapperType) {
      case MapperType.Acme:
        this.mapper = new AcmeQueryMapper();
        return this;

      case MapperType.Patagonia:
        throw new Error('Not implemented');

      case MapperType.PaperFlies:
        this.mapper = new PaperFliesQueryMapper();
        return this;

      default: throw new Error('Invalid MapperType');
    }
  }

  public executeMapping(dto: SupplierQueryDTO): Hotel {
    return this.mapper.mapToEntity(dto);
  }
}
