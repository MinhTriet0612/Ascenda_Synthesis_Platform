import { PineLine } from "./pineline/PineLine";
import { Hotel } from "./model/Hotel";
import { AcmeOperation } from "./operations/impl/AcmeOperation";
import { PaperFliesOperation } from "./operations/impl/PaperFliesOperation";


async function main() {
  const hotelStore: Map<String, Hotel> = new Map();
  const pineLine = new PineLine<Map<String, Hotel>>();
  // pineLine.addOperation(new AcmeOperation())/* .addOperation(new PaperFliesOperation()).addOperation(new PatagoniaOperation()); */
  pineLine.addOperation(new PaperFliesOperation());
  await pineLine.execute(hotelStore);

  // console.log(hotelStore);
}

main();



// console.log(tmpdata);
