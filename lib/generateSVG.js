// class shape {
//   constructor(letters, letterColors, shape, shapeColors) {
//     this.letters = letters;
//     this.letterColors = letterColors;
//     this.shape = shape;
//     this.shapeColors = shapeColors;
//   }
// }

// class Square extends shape {
//   constructor(letters, letterColors, shapeColors) {
//     super(letters, letterColors, shapeColors);
//   }
//   render() {
//     return `<svg width="300" height="200">
//     <rect width="200" height="200" fill="${this.shapeColors}" />
//     <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text>
//     </svg>`;
//   }
// }

// class Circle extends shape {
//   constructor(letters, letterColors, shape, shapeColors) {
//     super(letters, letterColors, shape, shapeColors);
//   }
//   render() {
//     return `<svg width="300" height="200">
//     <circle  cx="100" cy="100" r="100"   fill="${this.shapeColors}" />
//     <text x="100"  y="115" font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text>
//     </svg>`;
//   }
// }

// class Triangle extends shape {
//   constructor(letters, letterColors, shape, shapeColors) {
//     super(letters, letterColors, shape, shapeColors);
//   }

//   //50,0 100,100 0,100
//   render() {
//     return `<svg width="300" height="200">
//     <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColors}" />
//     <text x="100" y="155"  font-size="70" text-anchor="middle" fill="${this.letterColors}">${this.letters}</text>
//     </svg>`;
//   }
// }
const Triangle = require("./Triangle.js");
const Circle = require("./Circle.js");
const Square = require("./Square.js");

let generateSVG;
generateSVG = ({ shape, letters, letterColors, shapeColors }) => {
  switch (shape) {
    case "Triangle":
      generateSVG = new Triangle(letters, letterColors, shapeColors, shape);
      break;
    case "Circle":
      generateSVG = new Circle(letters, letterColors, shapeColors, shape);
      break;
    case "Square":
      generateSVG = new Square(letters, letterColors, shapeColors, shape);
      break;
  }
  return generateSVG.render();
};

module.exports = generateSVG;
