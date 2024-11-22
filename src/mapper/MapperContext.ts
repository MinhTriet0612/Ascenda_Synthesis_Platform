import { Hotel } from "../model/Hotel";
import { SupplierQueryDTO } from "../queryDTOs/SupplierQueryDTO";
import { AcmeQueryMapper } from "./impl/AcmeQueryMapper";
import { PaperFliesQueryMapper } from "./impl/PaperFliesQueryMapper";
import { PatagoniaQueryMapper } from "./impl/PatagoniaQueryMapper";
import { SupplierQueryMapper } from "./SupplierQueryMapper";
import { MapperType } from "./constrains/MapperType";

export class MapperContext {
  private mapper: SupplierQueryMapper;

  constructor() {
  }

  public setMapper(mapperType: MapperType): MapperContext {
    switch (mapperType) {
      case MapperType.Acme:
        this.mapper = AcmeQueryMapper.getInstance();
        return this;

      case MapperType.PaperFlies:
        this.mapper = PaperFliesQueryMapper.getInstance();
        return this;

      case MapperType.Patagonia:
        this.mapper = PatagoniaQueryMapper.getInstance();
        return this;

      default: throw new Error('Invalid MapperType');
    }
  }

  public executeMapping(dto: SupplierQueryDTO): Hotel {
    return this.mapper.mapToEntity(dto);
  }
}
