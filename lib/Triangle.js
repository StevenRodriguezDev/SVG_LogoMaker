const shape = require("./shape.js");

class Triangle extends shape {
  constructor(letters, letterColors, shape, shapeColors) {
    super(letters, letterColors, shape, shapeColors);
  }

  //50,0 100,100 0,100
  render() {
    return `<svg width="300" height="200">
      <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColors}" />
      <text x="100" y="155"  font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text> 
      </svg>`;
  }
}

module.exports = Triangle;
