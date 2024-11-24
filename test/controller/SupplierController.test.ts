import { SupplierController } from "../../src/controller/SupplierController";
import { Hotel } from "../../src/model/Hotel";

describe('SupplierController', () => {
  it('should add URL query', () => {
    const controller = new SupplierController();
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';
    controller.addUrlQuery(url);
    expect(controller).toBeInstanceOf(SupplierController);
  });

  it("should return fail to add URL query", () => {
    const controller = new SupplierController();
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acmes';
    expect(() => {
      controller.addUrlQuery(url);
    }).toThrow('No operation found for the given URL');
  });

  it("check fetch supplier acme", async () => {
    const controller = new SupplierController();
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';
    controller.addUrlQuery(url);
    expect(controller).toBeInstanceOf(SupplierController);

    const hotels: Hotel[] = await controller.startFetching([], []);
    expect(hotels).toHaveLength(3);
  })

  it("check fetch supplier paperflies", async () => {
    const controller = new SupplierController();
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';
    controller.addUrlQuery(url);
    expect(controller).toBeInstanceOf(SupplierController);

    const hotels: Hotel[] = await controller.startFetching([], []);
    expect(hotels).toHaveLength(3);
  })

  it("check fetch supplier patagonia", async () => {
    const controller = new SupplierController();
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';
    controller.addUrlQuery(url);
    expect(controller).toBeInstanceOf(SupplierController);

    const hotels: Hotel[] = await controller.startFetching([], []);

    expect(hotels).toHaveLength(2);
  })
})

