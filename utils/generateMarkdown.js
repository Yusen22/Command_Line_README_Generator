


const generateLicenceBadge = (licence) => {

  let licenceLink
  
  if (licence === 'Apache license 2.0') {
    licenceLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licence === 'BSD 2-clause "Simplified" license') {
    licenceLink = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (licence === 'BSD 3-clause "New" or "Revised" license') {
    licenceLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (licence === 'GNU General Public License v2.0') {
    licenceLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (licence === 'GNU General Public License v3.0') {
    licenceLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (licence === 'GNU Lesser General Public License v3.0') {
    licenceLink = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (licence === 'ISC') {
    licenceLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (licence === 'MIT') {
    licenceLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licence === 'The Unlicense') {
    licenceLink = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  return licenceLink
}

// function to generate markdown for README
function generateMarkdown(answers) {
 

  return `# ${answers.title}\n
## Description 
${answers.description}\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Licence](#licence)\n
## Installation\n 
${answers.installation}\n
## Usage\n
${answers.usage}\n
## Contributors\n
${answers.contributors}\n
## Tests\n
${answers.tests}\n
## Questions\n
${answers.questions}\n
## Licence\n
${generateLicenceBadge(answers.licence)}\n`;
}


module.exports = generateMarkdown;

