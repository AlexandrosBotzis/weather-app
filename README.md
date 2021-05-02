## Description

This project is a weather application built with [ReactJS](https://reactjs.org/) & [Redux](https://redux.js.org/). <br />
Displays a Linear loading indicator upon initial loading of the project until it fetches weather data
from [Open Weather](https://openweathermap.org/) <br /> using [5 day weather API](https://openweathermap.org/forecast5).

After successful data fetching, user is able to navigate to weather cards with a forecast of 5 upcoming days using 
the navigation arrow links. Upon weather card selection a bar chart is visible indicating the weather forecast every 3 hours
for the selected day.
Also user is able to change the temperature unit from Fahrenheit to Celcius by switching the radio button.

The design has been optimized for mobile devices. In lower screen resolutions the bar chart is
converted to a horizontal bar chart ( column chart ) to provide a better user experience.

You can try in 
[Weather Application Live Preview](https://alexandrosbotzis.github.io/weather-app/)

## Available Scripts

In the project directory, you can run:

```bash

npm install
# install dependencies

npm start
# Stars the local server.

npm run webpack:dev
# Runs the Webpack server in the development mode.

npm test
# Launches the test runner in the interactive watch mode.

npm run build
# Builds the app for production to the `dist` folder.

npm run prettier:fix
# Formats the code using the code quality & stylistic rules.

npm run deploy
# Runs the above mentioned build command and deploys the
# `dist` folder to GitHub pages.

```

## Architecture

Application uses Redux for state management, [redux-thunk](https://github.com/reduxjs/redux-thunk) as a Redux middleware, and [React Hooks](https://reactjs.org/docs/hooks-intro.html).

Data are being fetched using [axios](https://github.com/axios/axios) HTTP client.

Components have been built using [Material UI Components](https://material-ui.com/) and specificaly BarChart component has
been built using [Styled components](https://styled-components.com/).

Build artifacts have been generated using [Webpack](https://github.com/webpack/webpack) bundler.

Other libraries used such as [lodash](https://lodash.com/) & [moment](https://momentjs.com/).
