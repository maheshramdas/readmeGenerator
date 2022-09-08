//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a short description explaining the what, why, and how of your project'
    }
    ,
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide the installation steps'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples for use'
    }, 
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide test instructions'
    },   
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email id'
    }, 
    {
        type: 'list',
        message: 'Provide enter how your project is used',
        name: 'license',
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'OpenBSD', 'N/A']
    }
];


//Function to write README file
function writeToFile(fileName, data) {

   const template =  generateMarkdown(data);   
   fs.writeFile('./output/'+fileName, template, err =>
        err ? console.log(err) : console.log('Success!')
    );

}

//Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const filename = `README.md`;
            writeToFile(filename, data);
        });
}

// Function call to initialize app
init();
