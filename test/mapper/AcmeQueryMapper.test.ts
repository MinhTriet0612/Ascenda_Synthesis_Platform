import { AcmeQueryMapper } from "../../src/mapper/AcmeQueryMapper";
import { Hotel } from "../../src/model/Hotel";
import { Location } from "../../src/model/Location";
import { AcmeQueryDTO } from "../../src/queryDTOs/AcmeQueryDTO";

describe("AcmeQueryMapper", () => {

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

    const hotel: Hotel = AcmeQueryMapper.mapToEntity(dto);

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

  it("should map AcmeQueryDTO to Hotel entity correctly with missing data and invalid data", () => {
    const dto: AcmeQueryDTO = {
      Id: "H123",
      DestinationId: 1001,
      Name: undefined,
      Latitude: -91, // invalid latitude
      Longitude: -190, // invalid longitude
      Address: undefined,
      City: undefined,
      Country: undefined,
      PostalCode: undefined,
      Description: undefined,
      Facilities: undefined
    };

    const hotel: Hotel = AcmeQueryMapper.mapToEntity(dto);

    expect(hotel).toBeInstanceOf(Hotel);
    expect(hotel.id).toBe(dto.Id);
    expect(hotel.destination_id).toBe(dto.DestinationId);
    expect(hotel.name).toBeUndefined();

    const location = hotel.location
    expect(location).toBeInstanceOf(Location);
    expect(location.lat).toBeUndefined();
    expect(location.lng).toBeUndefined();
    expect(location.address).toBeUndefined();
    expect(location.city).toBeUndefined();
    expect(location.country).toBeUndefined();
    expect(hotel.description).toBeUndefined();
  })

});
