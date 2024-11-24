
export class Location {
  lat?: number;
  lng?: number;
  address?: string;
  city?: string;
  country?: string;

  constructor() {
  }

  public setLat(lat: number): void {
    if (!lat) {
      return;
    }

    if (!this?.lat) {
      this.lat = lat;
    }
  }

  public setLng(lng: number): void {
    if (!lng) {
      return;
    }

    if (!this?.lng) {
      this.lng = lng;
    }
  }

  public setAddress(address: string): void {
    if (!address) {
      return;
    }

    if (!this?.address) {
      this.address = address.trim();
    }
  }

  public setCity(city: string): void {
    if (!city) {
      return;
    }

    if (!this?.city) {
      this.city = city.trim();
    }
  }

  public setCountry(country: string): void {
    if (!country) {
      return;
    }

    if (!this?.country) {
      this.country = country.trim();

    }
  }
}
