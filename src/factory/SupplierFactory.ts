import { HotelStoreContext } from "../context/HotelStoreContext";
import { OperationType } from "../controller/constraints/OperationType";
import { AcmeOperation } from "../operations/impl/AcmeOperation";
import { PaperFliesOperation } from "../operations/impl/PaperFliesOperation";
import { PatagoniaOperation } from "../operations/impl/PatagoniaOperation";
import { Operation } from "../operations/Operation";


export class SupplierOperationFactory {

  constructor() {
  }

  private static operationMap: Map<string, OperationType> = new Map<string, OperationType>(
    [
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme', OperationType.ACME],
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies', OperationType.PAPERFLIES],
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia', OperationType.PATAGONIA]
    ]
  );

  public static getOperationFactory(url: string): Operation<HotelStoreContext> {
    if (!this.operationMap.has(url)) {
      throw new Error('No operation found for the given URL');
    }

    switch (this.operationMap.get(url)) {
      case OperationType.ACME:
        return new AcmeOperation(url);
      case OperationType.PAPERFLIES:
        return new PaperFliesOperation(url);
      case OperationType.PATAGONIA:
        return new PatagoniaOperation(url);
      default:
        throw new Error("No operation found");
    }

  }

  public static addOperationFactory(url: string, operationType: OperationType): void {
    this.operationMap.set(url, operationType);
  }
};

