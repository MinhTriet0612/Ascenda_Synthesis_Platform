import { HotelStoreContext } from "../context/HotelStoreContext";
import { AcmeOperation } from "../operations/impl/AcmeOperation";
import { PaperFliesOperation } from "../operations/impl/PaperFliesOperation";
import { PatagoniaOperation } from "../operations/impl/PatagoniaOperation";
import { Operation } from "../operations/Operation";


export class SupplierOperationFactory {

  constructor() {
  }

  private static operationMap: Map<string, Operation<HotelStoreContext>> = new Map<string, Operation<HotelStoreContext>>(
    [
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme', new AcmeOperation("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme")],
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies', new PaperFliesOperation("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies")],
      ['https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia', new PatagoniaOperation("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia")]
    ]
  );

  public static getOperationFactory(url: string): Operation<HotelStoreContext> {
    if (!this.operationMap.has(url)) {
      throw new Error('No operation found for the given URL');
    }

    return this.operationMap.get(url);
  }

  public static addOperationFactory(url: string, operation: Operation<HotelStoreContext>): void {
    this.operationMap.set(url, operation);
  }
};

