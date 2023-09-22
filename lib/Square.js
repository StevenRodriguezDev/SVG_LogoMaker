const shape = require("./shape.js");

class Square extends shape {
  constructor(letters, letterColors, shapeColors) {
    super(letters, letterColors, shapeColors);
  }
  render() {
    return `<svg width="300" height="200">
      <rect width="200" height="200" fill="${this.shapeColors}" />
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text>
      </svg>`;
  }
}
module.exports = Square;
