# Express React Webpack Template

A simple template project for setting up a [React web application](https://reactjs.org/) using [Webpack](https://webpack.js.org/) and served by [ExpressJs](https://expressjs.com/)

License: [MIT](https://opensource.org/licenses/MIT)

## Usage

1. Clone repository
2. Run `npm install`
3. Create and popuplate the environment files `server.env` and `app.env` (see below)

* Run `npm run dev` to serve the app using the Webpack development server
* Run `npm start` to serve the app using ExpressJS for production

## Environment Files Example

Both of these files must exist in the root folder (adjacent to `package.json`) and all variables must be defined

####`server.env`
```
PORT=3000
```

####`app.env`
```
TEST_MSG=Hello World!
```

