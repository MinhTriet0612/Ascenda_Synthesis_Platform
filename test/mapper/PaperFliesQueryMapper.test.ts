import { PaperFliesQueryMapper } from "../../src/mapper/PaperFliesQueryMapper";
import { Amentity } from "../../src/model/Amentity";
import { Hotel } from "../../src/model/Hotel";
import { ImageStore } from "../../src/model/ImageStore";
import { Location } from "../../src/model/Location";
import { PaperFliesQueryDTO } from "../../src/queryDTOs/PaperFliesQueryDTO";

describe("PaperFliesQueryMapper", () => {
  it("should correctly map PaperFliesQueryDTO to Hotel entity", () => {

    const locationTmp = new Location()
    const amenitiesTmp = new Amentity()

    locationTmp.setLat(40.7128)
    locationTmp.setLng(-74.0060)
    locationTmp.setAddress("123 Main Street")
    locationTmp.setCity("New York")
    locationTmp.setCountry("USA")

    amenitiesTmp.setGeneral(["Free Wi-Fi", "Parking"])
    amenitiesTmp.setRoom(["Air Conditioning", "TV"])


    const dto: PaperFliesQueryDTO = {
      hotel_id: '1',
      destination_id: 101,
      hotel_name: "Luxury Hotel",
      details: "A luxurious hotel in the heart of the city.",
      booking_conditions: ["Free cancellation", "Pay at property"],
      location: locationTmp,
      amenities: amenitiesTmp,
      images: {
        rooms: [
          { link: "https://example.com/room1.jpg", caption: "Room 1" },
          { link: "https://example.com/room2.jpg", caption: "Room 2" },
        ],
        amenities: [
          { link: "https://example.com/pool.jpg", caption: "Pool" },
          { link: "https://example.com/spa.jpg", caption: "Spa" },
        ],
        site: [
          { link: "https://example.com/hotel.jpg", caption: "Hotel Front" },
        ],
      },
    };

    const hotel: Hotel = PaperFliesQueryMapper.mapToEntity(dto);

    expect(hotel.id).toBe(dto.hotel_id);
    expect(hotel.destination_id).toBe(dto.destination_id);
    expect(hotel.name).toBe(dto.hotel_name);
    expect(hotel.description).toBe(dto.details);

    const location: Location = hotel.location;

    expect(location.lat).toBe(dto.location.lat);
    expect(location.lng).toBe(dto.location.lng);
    expect(location.address).toBe(dto.location.address);
    expect(location.city).toBe(dto.location.city);
    expect(location.country).toBe(dto.location.country);

    const amenities: Amentity = hotel.amenities;
    expect(amenities.general).toEqual(dto.amenities.general);
    expect(amenities.room).toEqual(dto.amenities.room);

    const images: ImageStore = hotel.images;
    expect(images.rooms).toEqual(
      dto.images.rooms.map((ele) => ({
        link: ele.link.trim(),
        description: ele.caption.trim(),
      }))
    );
    expect(images.amenities).toEqual(
      dto.images.amenities.map((ele) => ({
        link: ele.link.trim(),
        description: ele.caption.trim(),
      }))
    );
    expect(images.site).toEqual(
      dto.images.site.map((ele) => ({
        link: ele.link.trim(),
        description: ele.caption.trim(),
      }))
    );

    expect(hotel.booking_conditions).toEqual(
      dto.booking_conditions.map((ele) => ele.trim())
    );



    const currBookingConditions = hotel.booking_conditions;

    hotel.setBookingConditions(["Free cancellation", "Pay at property"]);

    expect(hotel.booking_conditions).toEqual(currBookingConditions);
  });

  it("should handle missing or undefined properties gracefully", () => {
    const dto: PaperFliesQueryDTO = {
      hotel_id: '1',
      destination_id: 101,
      hotel_name: undefined,
      details: undefined,
      booking_conditions: undefined,
      location: undefined,
      amenities: undefined,
      images: undefined,
    };

    const hotel: Hotel = PaperFliesQueryMapper.mapToEntity(dto);

    expect(hotel.id).toBe(dto.hotel_id);
    expect(hotel.destination_id).toBe(dto.destination_id);
    expect(hotel.name).toBe(dto.hotel_name);
    expect(hotel.description).toBe(dto.details);

    const location: Location = hotel.location;
    expect(location).toEqual(new Location());

    const amenities: Amentity = hotel.amenities;
    expect(amenities).toEqual(new Amentity());

    const images: ImageStore = hotel.images;
    expect(images).toEqual(new ImageStore());

    expect(hotel.booking_conditions).toEqual([]);


    hotel.setImages(undefined);
    expect(hotel.images).toBeTruthy();

  });
});
