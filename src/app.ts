import { HotelStoreContext } from "./context/HotelStoreContext";
import { Hotel } from "./model/Hotel";
import { AcmeOperation } from "./operations/impl/AcmeOperation";
import { PaperFliesOperation } from "./operations/impl/PaperFliesOperation";
import { PatagoniaOperation } from "./operations/impl/PatagoniaOperation";
import { Pipeline } from "./pipeline/Pipeline";

async function main() {
  const ctx: HotelStoreContext = {
    hotelStore: new Map<string, Hotel>()
  }

  const pipeLine: Pipeline<HotelStoreContext> = new Pipeline<HotelStoreContext>();

  pipeLine
    .addOperation(new AcmeOperation())
    .addOperation(new PaperFliesOperation())
    .addOperation(new PatagoniaOperation());

  await pipeLine.execute(ctx);

  console.dir(ctx.hotelStore, { depth: null });



}


main();
