const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter a title for the project",
        name: "title",
        validate: (value) => {
            if (value.length < 3 && value !== 'N/A') {
                console.error("\nPlease enter a minimum of three characters")
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Provide a brief description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "How should the application be installed?",
        name: "install"
    },
    {
        type: "input",
        message: "Provide instructions on how the user should use the application.",
        name: "usage"
    },
    {
        type: "list",
        message: "Select a licence for this project",
        choices: [
            'Academic Free License',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License'
        ],
        name: 'licence'
    },
    {
        type: "input",
        message: "List contributors to the project",
        name: "contributors"
    },

]




// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("Successfully written!"));

    console.log(fileName);
    console.log(data);
}


// function to initialize program

function init() {
    console.log("Welcome to the professional README generator!\n\nPlease complete the questions below to generate your README.\n\nNOTE: Pressing enter on a question without inputting a value will give an answer of 'N/A'.\n")
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', generateMarkdown(answers))
        }
        )
}

// function call to initialize program
init();

module.exports = questions
