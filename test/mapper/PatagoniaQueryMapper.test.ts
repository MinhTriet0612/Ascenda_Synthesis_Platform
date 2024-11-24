import { PatagoniaQueryMapper } from "../../src/mapper/PatagoniaQueryMapper";
import { Amentity } from "../../src/model/Amentity";
import { Hotel } from "../../src/model/Hotel";
import { ImageStore } from "../../src/model/ImageStore";
import { Location } from "../../src/model/Location";
import { PatagoniaQueryDTO } from "../../src/queryDTOs/PatagoniaQueryDTO";

describe("PaperFliesQueryMapper", () => {
  it("should correctly map PaperFliesQueryDTO to Hotel entity", () => {

    const mockPatagoniaQueryDTO: PatagoniaQueryDTO = {
      id: "12345",
      destination: 101,
      name: "Patagonia Luxury Resort",
      lat: -49.3315,
      lng: -72.8863,
      address: "123 Patagonia Way, El Chaltén, Argentina",
      info: "An exquisite resort nestled in the heart of Patagonia, offering breathtaking views and luxury amenities.",
      amenities: ["Free Wi-Fi", "Heated Pool", "Spa", "24/7 Room Service"],
      images: {
        rooms: [
          {
            url: "https://example.com/images/room1.jpg",
            description: "Luxury suite with mountain view",
          },
          {
            url: "https://example.com/images/room2.jpg",
            description: "Cozy double room with modern amenities",
          },
        ],
        amenities: [
          {
            url: "https://example.com/images/pool.jpg",
            description: "Heated outdoor pool",
          },
          {
            url: "https://example.com/images/spa.jpg",
            description: "Relaxing spa area with sauna",
          },
        ],
      },
    };

    const hotel: Hotel = PatagoniaQueryMapper.mapToEntity(mockPatagoniaQueryDTO);

    expect(hotel.id).toBe(mockPatagoniaQueryDTO.id);
    expect(hotel.destination_id).toBe(mockPatagoniaQueryDTO.destination);
    expect(hotel.name).toBe(mockPatagoniaQueryDTO.name);
    expect(hotel.description).toBe(mockPatagoniaQueryDTO.info);

    const location: Location = hotel.location;
    expect(location.lat).toBe(mockPatagoniaQueryDTO.lat);
    expect(location.lng).toBe(mockPatagoniaQueryDTO.lng);
    expect(location.address).toBe(mockPatagoniaQueryDTO.address);
    expect(location.city).toBeUndefined();
    expect(location.country).toBeUndefined();

    const amenities: Amentity = hotel.amenities;
    expect(amenities.general).toEqual([]);
    expect(amenities.room).toEqual(mockPatagoniaQueryDTO.amenities);

    const images: ImageStore = hotel.images;
    expect(images.rooms).toEqual(mockPatagoniaQueryDTO.images.rooms.map(ele => {
      return {
        link: ele.url.trim(),
        description: ele.description.trim()
      }
    }));
    expect(images.amenities).toEqual(mockPatagoniaQueryDTO.images.amenities.map(ele => {
      return {
        link: ele.url.trim(),
        description: ele.description.trim()
      }
    }));
    expect(images.site).toEqual([]);
    expect(hotel.booking_conditions).toEqual([]);

  });

  it("should handle missing or undefined properties gracefully", () => {
    const dto: PatagoniaQueryDTO = {
      id: "123",
      destination: 456,
      name: undefined,
      lat: undefined,
      lng: undefined,
      address: undefined,
      info: undefined,
      amenities: undefined,
      images: {
        rooms: undefined,
        amenities: undefined,
      },
    };

    const hotel: Hotel = PatagoniaQueryMapper.mapToEntity(dto);

    expect(hotel.id).toBe(dto.id);
    expect(hotel.destination_id).toBe(dto.destination);
    expect(hotel.name).toBeUndefined();
    expect(hotel.description).toBeUndefined();

    const location: Location = hotel.location;
    expect(location.lat).toBeUndefined();
    expect(location.lng).toBeUndefined();
    expect(location.address).toBeUndefined();
    expect(location.city).toBeUndefined();
    expect(location.country).toBeUndefined();

    const amenities: Amentity = hotel.amenities;
    expect(amenities.general).toEqual([]);
    expect(amenities.room).toEqual([]);

    const images: ImageStore = hotel.images;
    expect(images.rooms).toEqual([]);
    expect(images.amenities).toEqual([]);
    expect(images.site).toEqual([]);
    expect(hotel.booking_conditions).toEqual([]);

  });
});
