// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return
    `\n* [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Copyright © ${license}. All rights reserved. 
      
        Licensed under the ${license} license.`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  *[Installation Instructions](#installation_instructions)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing Guidelines](#contributing_guidelines)
  *[Tests](#tests)
  *[Questions](#questions)
  ## Installation Instructions
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing Guidelines
  ${data.guideline}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions you can reach out at:
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
