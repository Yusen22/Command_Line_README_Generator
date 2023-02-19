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
            if (value.length < 3){
                console.log("\nPlease enter a minimum of 3 characters for your project title.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Provide a brief description of the project",
        name: "description",
        validate: (value) => {
            if (value.length < 10){
                console.log("\nPlease enter a minimum of 10 characters for your description.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "How should the application be installed?",
        name: "install",
        validate: (value) => {
            if (value.length < 3 && toUpperCase(value) !== 'N/A'){
                console.log("\nPlease enter a minimum of 3 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Provide instructions on how the user should use the application.",
        name: "usage",
        validate: (value) => {
            if (value.length < 10 && toUpperCase(value) !== 'N/A'){
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "List contributors to the project.",
        name: "contributors",
        validate: (value) => {
            if (value.length < 3 && toUpperCase(value) !== 'N/A'){
                console.log("\nPlease enter a minimum of 3 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Detail any tests that have been carried out on the application.",
        name: "contributors",
        validate: (value) => {
            if (value.length < 10 && toUpperCase(value) !== 'N/A'){
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "List any questions that have been asked of the project",
        name: "contributors",
        validate: (value) => {
            if (value.length < 10 && toUpperCase(value) !== 'N/A'){
                console.log("\nPlease enter a minimum of 10 characters or type 'N/A' to continue.");
            } else {
                return true
            }
        }
    },
    {
        type: "list",
        message: "Select a licence for this project.",
        choices: [
            'Apache license 2.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'MIT',
            'The Unlicense',
        ],
        name: 'licence'
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
    console.log("Welcome to the professional README generator!\n\nPlease complete the questions below to generate your README.\n\nNOTE: Enter 'N/A' on a question if the section is not relevant to your project.\n")
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
