# README Generator

## Purpose of Assignment 

Create a command-line application that generates a README file based on the user's inputs. 

## What I Did and Why

### index.js

Line 1: Declares inquirer const and tells it to require the inquirer package.

Line 2: Declares fs (file system) const and tells it to require fs. 

Line 3: Declares the generateMarkdown const and tells it to require the generateMarkdown.js file. 

Lines 5-52: Declares the questions array and defines each question type, message, and name.

Line 54: Calls on the inquirer.

Line 55: Delivers a prompt with the questions. 

Lines 56-59: Then, writes a README.md file based on the data pulled from generateMarkdown.js. If there is an error, deliver an error. If not, log 'Generating README...'. 

### generateMarkdown.js

Line 1: Declares the renderLicenseBadge function and takes in license as a parameter. 

Line 2: Declares let badgeString.

Lines 3-22: Creates a switch statement and takes in license as a parameter. Cycles through the different license options from the index.js and assigns each one a badgeString. If no selection is made, returns an empty badgeString.

Line 23: Returns the badgeString.

Line 26: Declares the renderLicenseLink function and takes in license as a parameter. 

Line 27:  Declares let linkString.

Lines 28-47: Creates a switch statement and takes in license as a parameter. Cycles through the different license options from the index.js and assigns each one a linkString. If no selection is made, returns an empty linkString.

Line 48: Returns the linkString.

Line 51: Declares the renderLicenseSection function and takes in license as a parameter. 

Line 52: Declares let statement and defines it as a string which indicates what license the project uses and links to it.

Line 53: Returns statement. 

Line 56: Declares the generateMarkdown function and takes in data as a parameter. 

Line 57: Declares let badgeString and links it to the license data from the renderLicenseBadge function.

Line 58: Declares let statement and links it to the license data from the renderLicenseSection function. 

Lines 59-91: Returns the template literal that displays the following: name of the project, badge, description, installation, usage, contributing, tests, GitHub, email, and license info according to user inputs. Also displays a functioning table of contents. 

Line 95: Allows for the export of the generateMarkdown function for its use by the index.js file. 

## Gif 

![gif](readme.gif)

## Link to GitHub Repo

https://github.com/melanieuhrich/Homework-7