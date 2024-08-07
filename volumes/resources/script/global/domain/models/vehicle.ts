interface Input {
  name: string;
  model: string;
  price: number;
  category: string;
}

export default class Vehicle {
  constructor(
    readonly name: string,
    readonly model: string,
    readonly price: number,
    readonly category: string,
    readonly image: string
  ) { }

  static create({ name, model, price, category }: Input) {
    return new Vehicle(name, model, price, category, `https://docs.fivem.net/vehicles/${model}.webp`);
  }
}