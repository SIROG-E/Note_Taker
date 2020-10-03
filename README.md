# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Important/HerokuGuide.md) for getting your app deployed on Heroku.

- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

 ## **GOOD-README-GENERATOR**

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub license](https://img.shields.io/badge/Made%20by-SIROG--E-ab8c9b?style=flat&logo=github)](http://https://github.com/SIROG-E)  
  
  ## Description
  When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Preview](#preview)
  * [Website](#website)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  
  ## Installation

  Run: 

  ```
  npm install
  ```

  ## Usage

  This command-line application dynamically generates a README.md from a user's input. The application will be invoked with the following command: 

  ```
  node index.js
  ```
  
  
  <ul>

  <li> A quality, professional README.md is generated with the title of user's project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions, when the user is prompted for information about his/her application repository. </li>
  <li> When the user enters project title, this is displayed as the title of the README file.</li>
  <li>After the user enters description, installation instructions, usage information, contribution guidelines, and test instructions, then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.</li>
  <li>A badge is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under, when  the user chooses a license for his/her application from a list of options.</li>
  <li>GitHub username is added to the section of the README entitled Questions, with a link to my GitHub profile.</li>
  <li>User's email address is added to the section of the README entitled Questions, with instructions on how to reach user with additional questions.</li>
  <li>The user is taken to the corresponding section of the README file, when the user clicks on the links in the Table of Contents.</li>
  <ul>


## Preview
![Good-README-Generator Preview](assets/Preview.png) \
![Good-README-Generator Walkthrough](assets/README-Generator-Walkthrough.gif) \
<!-- ![README-Generator-Walkthrough](https://drive.google.comfiled1-hJydI0DePoIJmMulr5ZoG1hgH4zQWHC/preview/) -->

### Websites

[Good-README-Generator](https://sirog-e.github.io/Good-README-Generator/) 



  ## License
  This project is licensed by:\
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

  ## Contributing
  ![GitHub license](https://img.shields.io/badge/Made%20by-SIROG--E-ab8c9b?style=flat&logo=github)

  ## Test
  ![](https://img.shields.io/badge/Test-100%25-success?style=flat&logo=node.js) 

  ## Questions
  If you have any questions, contact SIROG-E at goris.evelyn@gmail.com
  
  ## Repository
  - [Project Repo](https://sirog-e.github.io/Good-README-Generator/)
  
  ## GitHub
  ![Image of me](https://avatars3.githubusercontent.com/u/70104520?v=4)
  - Evelyn Goris
  - [GitHub Profile](https://github.com/SIROG-E)
  - <null>