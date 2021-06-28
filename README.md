# hype live report dashboard

Dasbhoard is access here => https://clever-kare-28a355.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode, Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Executes eslint & search for liniting issues in the source code, autofixing of linting issues `npm run lint:fix`.

### `npm run ci`

Lunches the test runner followed by execution of eslint.

## Run the application in dev. mode.

1. Development env.

`npm install && npm start`

2. Build & deploy using Docker

`docker build . && docker-compose up`

## CI/CD

Application relies on Travis for running test & ensuring no comprises with the code Quality!

Manually trigger travis checks => `npm run ci`


## Tools used to build the application, testing, CI/CD, Deployment.

* React - React is an open-source front-end JavaScript library for building user interfaces or UI components.
* Typescript -  It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
* Emotion is a library designed for writing css styles with JavaScript.
* Jest, React testing library - Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
* Eslint - ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
* Husky - Husky is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.
* Travis - Travis CI enables your team to test and ship your apps with confidence.
* Netlfiy - An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps.


## Best Practises

* Modern ES6 syntax is heavily used to build the application.
* Dir. structure comprises of `ìndex.tsx` for exporting the modules.
* Module resolution is implemented to avoid long import paths.
* High Cohesion priniciple used for grouping things that makes sense together.
* Low Coupling among diffrent react components.
* DRY, KISS prinicple is well respected.
* Rather than tests focusing on the implementation (Enzyme), tests are more focused on user behavior (react-testing-library).
* Snapshot testing used to ensure UI does not change unexpectedly.
* Responsive fluid design based on flex-box model.


### Web Device

 <img src="https://i.imgur.com/zs7bsDv.png" alt="hype-live-report-dashboard-web">
 
 ### Mobile Device
 
 <img src="https://i.imgur.com/od7ejLv.png" alt="hype-live-report-dashboard-mobile">
 
 ### Ipad Device
 
  <img src="https://i.imgur.com/Th6P0gB.png" alt="hype-live-report-ipad">

