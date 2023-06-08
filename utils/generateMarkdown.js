// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  if (license === 'MIT') {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
}
else if (license === 'Creative Commons') {
  return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
}
else if (license === 'GNU') {
  return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
}
else {
  return '';}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Creative Commons') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'MIT License';
  }
  else if (license === 'Creative Commons') {
    return 'Creative Commons';
  }
  else if (license === 'GNU') {
    return 'GNU';
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.nameOfProject}
  ${renderLicenseBadge(answers.license)}

  ## Description
      
      ${answers.discription}
      
  ## Table of Contents
      
  [Installation](https://github.com/${answers.username}/${answers.nameOfProject}#installation)
  
  [Usage](https://github.com/${answers.username}/${answers.nameOfProject}#usage)
  
  [License](https://github.com/${answers.username}/${answers.nameOfProject}#license)
  
  [Contributing](https://github.com/${answers.username}/${answers.nameOfProject}#contributing)
  
  [Test](https://github.com/${answers.username}/${answers.nameOfProject}#test)
  
  [Questions](https://github.com/${answers.username}/${answers.nameOfProject}#questions)
      
  ## Installation
      
      ${answers.depend}
      
  ## Usage
      
      ${answers.thingsToKnow}
      
      
  ## License
      
  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}
  
      
      
  ## Contributing
      
      ${answers.contributingRepo}
      
  ## Tests
      
      ${answers.tests}
  
  ## Questions 
  [MyGitHub](https://github.com/${answers.username})
      If you need to contact me with more questions: ${answers.email}
  

`;
}

module.exports = generateMarkdown;
