// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Add a description of your project:"
    },
    {
        type: "input",
        name: "install",
        message: "Add installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Add usage informtion:"
    },
    {
        type: "input",
        name: "guideline",
        message: "Add contribution guidelines:"
    },
    {
        type: "input",
        name: "test",
        message: "Add test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>{
        if (err) throw err;

        console.log('README has been created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(readmeData => {
        const readmeMD = generateMarkdown(readmeData);
        writeToFile('README.md', readmeMD);
    })
}

// Function call to initialize app
init();
