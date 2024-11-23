import { SupplierController } from "./controller/SupplierController";


function parseArgs(args: string[]): { hotel_ids: string[], destination_ids: number[] } {
  if (args[0] === "none") {
    return { hotel_ids: [], destination_ids: [] };
  }
  const hotel_ids = args[0].split(',');

  if (args[1] === "none") {
    return { hotel_ids, destination_ids: [] };
  }
  const destination_ids = args[1].split(',').map((id) => parseInt(id));

  return { hotel_ids, destination_ids };
}

async function main() {
  const supplierController = new SupplierController();

  supplierController
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme")
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies")
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia");

  await supplierController.execute();

  const { hotel_ids, destination_ids } = parseArgs(process.argv.slice(2));
  const hotelsFiltered = supplierController.filterByHotelIdsAndDestionationIds(hotel_ids, destination_ids);

  console.log(JSON.stringify(hotelsFiltered, null, 2));
}


main();
