import { SupplierController } from "./controller/SupplierController";

async function main() {
  const controller = new SupplierController();

  controller
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme")
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies")
    .addUrlQuery("https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia");

  const ctx = await controller.getCtx();
  console.dir(ctx, { depth: null });
}


main();
