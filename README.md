[![codebeat badge](https://codebeat.co/badges/67b00218-063a-42c9-9790-4e1b67bbc9f8)](https://codebeat.co/projects/github-com-nezhar-snypy-frontend-master)
[![codecov](https://codecov.io/gh/snypy/snypy-frontend/branch/master/graph/badge.svg?token=OvVAixHuiA)](https://codecov.io/gh/snypy/snypy-frontend)
[![Known Vulnerabilities](https://snyk.io/test/github/nezhar/snypy-frontend/badge.svg?targetFile=package.json)](https://snyk.io/test/github/nezhar/snypy-frontend?targetFile=package.json)

# SnyPy Frontend

Angular based UI for managing code snippets

### Table of Contents

[Description](https://github.com/dianas11xx/snypy-frontend#Description)
[Required Tools](https://github.com/dianas11xx/snypy-frontend#Required-Tools)
[How to Create Development server](https://github.com/dianas11xx/snypy-frontend#How-to-Create-Development-server)
[How to Build](https://github.com/dianas11xx/snypy-frontend#How-to-Build)
[License](https://github.com/dianas11xx/snypy-frontend#License)

<br />
## Description

Welcome to our project! This is an Angular based UI that helps you manage/organize code snippets and share it with out team. Through this application, you are able to:
* Create, edit and share code snippets
* Use Monaco Editor to view and edit snippets
* Manage account or team labels
* Manage languages globally through the administrator
* Share snippets in a restricted group
* Decide if the snippet can be shared or not
* Use search function to easily find snippets by labels or content

<br />
Example of UI:

![SnyPy Screenshot](https://snypy.com/assets/img/portfolio/fullsize/1.png)


## Required Tools

This application uses the Angular framework, so it uses:
* JavaScript
* HTML
* CSS
<br />
It requires an active LTS version fo Node.js, avaliable to download [here](https://nodejs.org/en/),
and an npm package manager. 
<br />
To get started with npm, you have to create an [npm account](https://www.npmjs.com/signup) and then [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), or by using the command:
* npm install -g npm
<br />
The next step is to install Angular CLI using the following command:
* npm install -g @angular/cli
<br />
For more information on installing Angular tools, visit https://angular.io/guide/setup-local

## How to Create Development server
Navigate to the workspace folder and run `ng serve` for a dev server.
<br />
 Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to Build

Run `ng build` to build the project. 
<br />
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## License

The MIT License (MIT)
