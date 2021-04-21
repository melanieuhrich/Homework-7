// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs')
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['Apache', 'GNU GPL v3', 'BSD 3', 'MIT', 'Boost', 'None']
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing'
    },
];

inquirer 
    .prompt(questions) 
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (error) => 
        error? console.error(error) : console.log('Generating README...'))
    })