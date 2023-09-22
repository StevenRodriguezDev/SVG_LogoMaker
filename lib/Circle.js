const shape = require("./shape.js");

class Circle extends shape {
  constructor(letters, letterColors, shape, shapeColors) {
    super(letters, letterColors, shape, shapeColors);
  }
  render() {
    return `<svg width="300" height="200">
      <circle  cx="100" cy="100" r="100"   fill="${this.shapeColors}" />
      <text x="100"  y="115" font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text>
      </svg>`;
  }
}

module.exports = Circle;
