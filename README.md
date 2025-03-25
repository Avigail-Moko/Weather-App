<<<<<<< HEAD
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
# Angular Weather App

This is a simple Angular project that displays the current weather and a 5-day forecast for a specified city using the OpenWeatherMap API.

![image](https://github.com/user-attachments/assets/cf78882c-a530-493a-938d-8deb1d27477f)

## Installation and Running the Application

1. **Clone or Download the Repository:**
   - Clone the repository from GitHub or download the ZIP file.

2. **Install Dependencies:**
   ```bash
   npm install
3. **Run the Application:**
   ```bash
   ng serve
The app will run at http://localhost:4200.
# API Configuration
In the src/environments.ts file, insert your OpenWeatherMap API key:

      export const environment = {
      production: true,
      apiKey: 'YOUR_API_KEY_HERE'
      };
     
# Project Structure
```plain text
angular-weather-app/
├── README.md
├── package.json
├── angular.json
└── src
    ├── index.html
    ├── environments.ts
    └── app
        ├── app.module.ts
        ├── app-routing.module.ts
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.scss
        ├── weather.service.ts
        ├── current-weather
        │   ├── current-weather.component.ts
        │   ├── current-weather.component.html
        │   └── current-weather.component.scss
        └── forecast
            ├── forecast.component.ts
            ├── forecast.component.html
            └── forecast.component.scss
```

# Approach Overview
- **Components and Service:**
      The project is built with two main components:
        -**Current Weather Component:** Displays the current weather for a specific city (e.g., Tel Aviv) and allows switching between Celsius and Fahrenheit.
        -**Forecast Component:** Displays a 5-day weather forecast by filtering unique days and limiting the output to 5 entries.
      The WeatherService handles fetching data from the OpenWeatherMap API.

- **Styling:**
The UI uses Angular Material components (e.g., mat-card, mat-tab-group, mat-grid-list) for a clean and responsive design.

  





>>>>>>> 944994bea5eb5346889db7acc7d6c065454cbae2
