// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'nameOfProject',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'discription',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ["MIT", "Creative Commons", "GNU"]

    },
    {
        type: 'input',
        message: 'What command should you run to install dependencies?',
        name: 'depend',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should you run to run tests?',
        name: 'tests',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'thingsToKnow',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributingRepo',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
      }); 

}

const handleAnswers = (answers) => {
    console.log(answers);
    writeToFile('README.md',generateMarkDown(answers));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(handleAnswers)
}

// Function call to initialize app
init();
