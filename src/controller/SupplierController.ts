import { HotelStoreContext } from "../context/HotelStoreContext";
import { SupplierOperationFactory } from "../factory/SupplierFactory";
import { Hotel } from "../model/Hotel";
import { Pipeline } from "../pipeline/Pipeline";

export class SupplierController {

  private ctx: HotelStoreContext;
  private pipeline: Pipeline<HotelStoreContext>;

  public constructor() {
    this.ctx = {
      hotelStore: new Map<string, Hotel>()
    }

    this.pipeline = new Pipeline<HotelStoreContext>();
  }

  public addUrlQuery(url: string): this {
    this.pipeline.addOperation(SupplierOperationFactory.getOperationFactory(url));
    return this;
  }

  public async execute(): Promise<void> {
    await this.pipeline.execute(this.ctx);
  }

  public async getCtx(): Promise<HotelStoreContext> {
    await this.execute();
    return this.ctx;
  }
  

}
