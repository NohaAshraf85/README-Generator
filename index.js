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
        name: "toc",
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
        type: "list",
        name: "license",
        message: "What Type of license?",
        choices: [
          "MIT License",
          "GNU General Public License v3.0",
          "Apache License 2.0",
          "ISC License",
          "Mozilla Public License 2.0",
          "Boost Software License 1.0",
          "The Unlicense"
        ]
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
      },
      {
        type: "input",
        name: "badges",
        message: "Please include the badges"
      }
    ]);
  }

  function generateREADME(answers) {
    return `
    # Title 
    ${answers.title}
    # Description 
    ${answers.description}
    # Table of Contents 
    ${answers.toc}
    # Installation 
    ${answers.installation}
    # Usage 
    ${answers.usage}
    # License 
    ${answers.license}
    # Contributing 
    ${answers.contributing}
    # Tests 
    ${answers.tests}
    # Questions 
    ${answers.questions}
    # Badges 
    ${answers.badges}`;
  }

  promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

    return writeFileAsync("README1.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to README1.md");
  })
  .catch(function(err) {
    console.log(err);
  });




  