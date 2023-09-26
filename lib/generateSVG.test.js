// const generateSVG = require("./generateSVG");
const Circle = require("./Circle");

describe("Circle", () => {
  test("Should render an SVG circle element with color and text", () => {
    //Arrange
    const expectedResult = `<svg width="300" height="200">
      <circle  cx="100" cy="100" r="100"   fill="yellow" />
      <text x="100"  y="115" font-size="70" text-anchor="middle" fill="black">SVG</text>
      </svg>`
      
    //Act
    const result = new Circle("SVG", "black", "yellow");
    //Assert
    expect(result.render()).toEqual(expectedResult);
  });

  // describe("generateSVG", () => {
  //   test("checks ", () => {
  //     //Arrange
  //     //Act
  //     //Assert
  //   });

  //   it("checks", () => {
  //     //Arrange
  //     //Act
  //     //Assert
  //   });
});