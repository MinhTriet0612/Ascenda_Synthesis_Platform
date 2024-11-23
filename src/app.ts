import { HotelStoreContext } from "./context/HotelStoreContext";
import { SupplierOperationFactory } from "./factory/SupplierFactory";
import { Hotel } from "./model/Hotel";
import { Pipeline } from "./pipeline/Pipeline";

async function main() {
  const ctx: HotelStoreContext = {
    hotelStore: new Map<string, Hotel>()
  }

  const pipeLine: Pipeline<HotelStoreContext> = new Pipeline<HotelStoreContext>();

  pipeLine
    .addOperation(SupplierOperationFactory.getOperationFactory("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme"))
    .addOperation(SupplierOperationFactory.getOperationFactory("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies"))
    .addOperation(SupplierOperationFactory.getOperationFactory("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia"));

  await pipeLine.execute(ctx);

  console.dir(ctx.hotelStore, { depth: null });

}


main();
