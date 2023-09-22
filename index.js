// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG");
// TODO: Create an array of questions for user input
const questions = [
  //3 letters
  {
    type: "input",
    message: "Please choose 3 letters: ",
    name: "letters",
  },
  // lettercolors
  {
    type: "input",
    message:
      "Please enter a color keyword or a hexadecimal number for letter colors: ",
    name: "letterColors",
  },
  //shape
  {
    type: "list",
    message: "Please choose a Shape: ",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  //shape colors
  {
    type: "input",
    message:
      "Please enter a color keyword or a hexadecimal number for shape colors: ",
    name: "shapeColors",
  },
];

// TODO: Create a function to write  file
function createFile(fileName, data) {
  const mySVG = generateSVG(data);
  fs.writeFile(fileName, mySVG, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Your SVG file is in the output folder!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    createFile("./output/logo.svg", data);
  });
}

// Function call to initialize app
init();
