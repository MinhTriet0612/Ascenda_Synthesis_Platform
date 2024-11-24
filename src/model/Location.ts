
export class Location {
  lat?: number;
  lng?: number;
  address?: string;
  city?: string;
  country?: string;

  constructor() {
  }

  public setLat(lat: number): void {
    if (this?.lat) {
      return;
    }

    if (!lat || lat < -90 || lat > 90) {
      return;
    }

    this.lat = lat;
  }

  public setLng(lng: number): void {
    if (this?.lng) {
      return;
    }

    if (!lng || lng < -180 || lng > 180) {
      return;
    }

    this.lng = lng;
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
