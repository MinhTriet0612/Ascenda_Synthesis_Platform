import { AcmeQueryMapper } from "../src/mapper/impl/AcmeQueryMapper";
import { Hotel } from "../src/model/Hotel";
import { Location } from "../src/model/Location";
import { AcmeQueryDTO } from "../src/queryDTOs/AcmeQueryDTO";

describe("AcmeQueryMapper", () => {
  let acmeQueryMapper: AcmeQueryMapper;

  beforeEach(() => {
    acmeQueryMapper = AcmeQueryMapper.getInstance();
  });

  it("should be a singleton", () => {
    const instance1 = AcmeQueryMapper.getInstance();
    const instance2 = AcmeQueryMapper.getInstance();
    expect(instance1).toBe(instance2);
  });

  it("should map AcmeQueryDTO to Hotel entity correctly", () => {
    const dto: AcmeQueryDTO = {
      Id: "H123",
      DestinationId: 1001,
      Name: "Sunset Resort",
      Latitude: 34.0522,
      Longitude: -118.2437,
      Address: "456 Sunset Blvd",
      City: "Los Angeles",
      Country: "USA",
      PostalCode: "90001",
      Description: "A luxurious resort with a view of the sunset.",
      Facilities: ["Pool", "Spa", "Gym", "Restaurant", "Free Wi-Fi"]
    };

    const hotel: Hotel = acmeQueryMapper.mapToEntity(dto);

    expect(hotel).toBeInstanceOf(Hotel);
    expect(hotel.id).toBe(dto.Id);
    expect(hotel.destination_id).toBe(dto.DestinationId);
    expect(hotel.name).toBe(dto.Name);

    const location = hotel.location
    expect(location).toBeInstanceOf(Location);
    expect(location.lat).toBe(dto.Latitude);
    expect(location.lng).toBe(dto.Longitude);
    expect(location.address).toBe(dto.Address);
    expect(location.city).toBe(dto.City);
    expect(location.country).toBe(dto.Country);
    expect(hotel.description).toBe(dto.Description);
  });
});
