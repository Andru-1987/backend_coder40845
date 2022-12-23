import randomNumber from "./helper.js";

class RandomColor {
  constructor() {
    this.rColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  }

  getColor() {
    return this.rColor;
  }

  printColor() {
    console.log(this.getColor());
  }
}

const randColor = new RandomColor();

randColor.printColor();
