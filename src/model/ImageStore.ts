
export class ImageStore {
  rooms: Image[];
  site: Image[];
  amenities: Image[];

  constructor() {
    this.rooms = [];
    this.site = [];
    this.amenities = [];
  }

  public setRooms(rooms: Image[]): void {
    if (this.rooms.length !== 0 || !rooms) {
      return;
    }

    this.rooms = rooms.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.description.trim()
      }
    })
  }
  public setSite(site: Image[]): void {
    if (this.site.length !== 0 || !site) {
      return;
    }

    this.site = site.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.description.trim()
      }
    })
  }
  public setAmenities(amenities: Image[]): void {
    if (this.amenities.length !== 0 || !amenities) {
      return;
    }

    this.amenities = amenities.map(ele => {
      return {
        link: ele.link.trim(),
        description: ele.description.trim()
      }
    })
  }
}

export interface Image {
  link: string;
  description: string;
}
