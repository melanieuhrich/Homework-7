function renderLicenseBadge(license) {
  let badgeString; 
  switch (license) {
    case 'Apache':
      badgeString = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GNU GPL v3': 
      badgeString = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'BSD 3':
      badgeString = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    case 'MIT': 
      badgeString = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Boost': 
      badgeString = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
      break;
    default:
      badgeString ='';
      break;  
  }
  return badgeString;
}

function renderLicenseLink(license) {
  let linkString; 
  switch (license) {
    case 'Apache':
      linkString = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU GPL v3': 
      linkString = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3':
      linkString = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MIT': 
      linkString = 'https://opensource.org/licenses/MIT';
      break;
    case 'Boost': 
      linkString = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    default:
      linkString ='';
      break;  
  }
  return linkString;
}

function renderLicenseSection(license) {
  let statement = `This project uses the following license: [${license}](${renderLicenseLink(license)}).`;
  return statement;
}

function generateMarkdown(data) {
  let badgeString = renderLicenseBadge(data.license)
  let statement = renderLicenseSection(data.license)
  return `# ${data.name}

${badgeString}

# Description
${data.description} 

# Table of Contents 
  -   [Installation](#Installation)
  -   [Usage](#Usage)
  -   [Contributing](#Contributing)
  -   [Tests](#Tests)
  -   [Questions](#Questions)
  -   [License](#License) 

# Installation
${data.installation} 

# Usage
${data.usage}

# Contributing 
${data.contributing}

# Tests
${data.tests}

# Questions
[${data.github}](https://github.com/${data.github}) \n
${data.email}

# License 
${statement}`;

}

module.exports = generateMarkdown;
