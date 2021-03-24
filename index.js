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
      // {
      //   type: "input",
      //   name: "toc",
      //   message: "Add the Table of Contents"
      // },
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
          "Mozilla Public License 2.0"
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
      // {
      //   type: "input",
      //   name: "questions",
      //   message: "Questions here"
      // },
      {
        type: "input",
        name: "githubuser",
        message: "Github User"
      },
      {
        type: "input",
        name: "email",
        message: "email address"
      }
    ]);
  }

  function generateREADME(answers) {
    var licenseurl="";

    if(answers.license === "MIT License")
    {
      licenseurl="[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    }

    else if(answers.license === "GNU General Public License v3.0")
    {
      licenseurl="[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://opensource.org/licenses/gpl-license)";
    }

    else if(answers.license === "Apache License 2.0")
    {
      licenseurl="[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    }

    else if(answers.license === "ISC License")
    {
      licenseurl="[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)";
    }

    else if(answers.license === "Mozilla Public License 2.0")
    {
      licenseurl="[![License: GNU](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-green.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
       


    return `# Title 
    ${answers.title}
${licenseurl}

## Description 
    ${answers.description}
## Table of Contents 
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)
## Installation 
    ${answers.installation}
## Usage 
    ${answers.usage}
## License 
    ${answers.license}
## Contributing 
    ${answers.contributing}
## Tests 
    ${answers.tests}
## Questions
For any questions, please contact me through [GitHub](github:${answers.githubuser}) 
or [Email](email:${answers.email})`
    ;
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




  