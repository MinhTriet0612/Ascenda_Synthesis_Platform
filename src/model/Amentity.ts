

export class Amentity {
  general: string[];
  room: string[];


  constructor() {
    this.general = [];
    this.room = [];
  }

  public setGeneral(general: string[]): void {
    if (this?.general && this.general.length > 0) {
      return;
    }

    if (!general || general.length === 0) {
      return;
    }

    this.general = general.map(ele => ele.trim());
  }

  public setRoom(room: string[]): void {
    if (this?.room && this.room.length > 0) {
      return;
    }

    if (!room || room.length === 0) {
      return;
    }

    this.room = room.map(ele => ele.trim());
  }
}
