import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.__range = range;
  }

  get range() {
    return this._range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const Clone = this.constructor[Symbol.species];
    return new Clone();
  }
}
