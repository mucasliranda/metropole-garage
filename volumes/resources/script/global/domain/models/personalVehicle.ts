interface Input {
  name: string;
  model: string;
  price: number;
  category: string;
  primaryColor: string;
  secondaryColor: string;
  plate: string;
}

export default class PersonalVehicle {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly model: string,
    readonly price: number,
    readonly category: string,
    readonly image: string,
    readonly primaryColor: string,
    readonly secondaryColor: string,
    readonly plate: string,
  ) { }

  static create({ name, model, price, category, primaryColor, secondaryColor, plate }: Input) {
    return new PersonalVehicle((new Date()).getTime().toString(36), name, model, price, category, `https://docs.fivem.net/vehicles/${model}.webp`, primaryColor, secondaryColor, plate);
  }

  primaryColorRGB() {
    return this.hexToRgb(this.primaryColor)
  }

  secondaryColorRGB() {
    return this.hexToRgb(this.secondaryColor)
  }

  private hexToRgb(hex: string) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }
}