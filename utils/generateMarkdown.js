// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}\n
          ## ${questions.description}\n
          ##Table of Contents\n
          - [Installation](#installation)
          - [Usage](#usage)
          - [Credits](#credits)
          - [Tests](#tests)
          - [Questions](#questions)
          - [Licence](#licence)\n
          ## Installation\n 
          ${questions.installation}\n
          ## Usage 
          ${questions.usage}\n
          ## Contributors
          ${questions.contributors}\n
          ## Tests
          ${questions.tests}\n
          ## Questions
          ${questions.questions}\n
          ## Licence
          ${questions.licence}\n

`;
}

module.exports = generateMarkdown;
