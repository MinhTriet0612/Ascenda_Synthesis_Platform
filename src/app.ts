import { PineLine } from "./pineline/PineLine";
import { Hotel } from "./model/Hotel";
import { AcmeOperation } from "./operations/impl/AcmeOperation";
import { PaperFliesOperation } from "./operations/impl/PaperFliesOperation";
import { PatagoniaOperation } from "./operations/impl/PatagoniaOperation";


async function main() {
  const hotelStore: Map<String, Hotel> = new Map();
  const pineLine: PineLine<Map<String, Hotel>> = new PineLine<Map<String, Hotel>>();

  // pineLine.addOperation(new AcmeOperation()).addOperation(new PaperFliesOperation());
  pineLine.addOperation(new PatagoniaOperation());
  await pineLine.execute(hotelStore);

  console.dir(hotelStore, { depth: null });
}

main();

// console.log(tmpdata);
