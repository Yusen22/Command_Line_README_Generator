const generateLicenceBadge = (licence) => {
licence
}


// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}\n
## Description 
${answers.description}\n
##Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Licence](#licence)\n
## Installation\n 
${answers.installation}\n
## Usage 
${answers.usage}\n
## Contributors
${answers.contributors}\n
## Tests
${answers.tests}\n
## answers
${answers.answers}\n
## Licence
${answers.licence}\n`;
}

console.log

module.exports = generateMarkdown;
