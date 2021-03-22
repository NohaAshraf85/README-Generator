const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the README Title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please add the README description"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "table of contents",
        message: "Add the Table of Contents"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation requirements"
      },
      {
        type: "input",
        name: "usage",
        message: "What is this purpose and usage of this application?"
      },
      {
        type: "input",
        name: "license",
        message: "Add the license"
      },
      {
        type: "input",
        name: "contributing",
        message: "How to contribute?"
      },
      {
        type: "input",
        name: "tests",
        message: "What type of testing?"
      },
      {
        type: "input",
        name: "questions",
        message: "Questions here"
      }
    ]);
  }
  