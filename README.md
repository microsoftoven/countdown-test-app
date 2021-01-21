# countdown-app

## Summary
Countdown is a small webapp created for the web engineer project! It specifically aims to fulfill the requirements of taking a number or set of numbers to set/reset a countdown timer, code refactoring, and a select number of additional features that would make sense for an app such as this. 

## Features
- Login/logout via Google OAuth with PassportJS
- Connection to a MongoDB database (cloud)
- Create a personal list of deadlines (countdowns) with custom titles and dates
- Create, edit, update, and delete deadlines (countdowns)

## Installation

Enclosed are instructions for running the Countdown App project. Please see the related email for keys and login information. You will need these keys in order to run the project.

Note: The app uses a small Node + Express backend to handle authentication and API routes, so it is running on two servers (localhost:5000 and localhost:3000) with a proxy to handle API requests.

1. Install [`Yarn`](https://yarnpkg.com/en/) and [`TypeScript`](https://www.typescriptlang.org)

2. Install the project dependencies in the project's root directory:
    ```bash
    yarn install
    ```
3. Install the project dependencies in the client folder:
    ```bash
    cd client
    ```
    ```bash
    yarn install
    ```

4. Copy the local key file (dev.txt) into koala-countdown/config/. This file must be renamed *dev.js* instead of *dev.txt*. This file was intentionally left out of the repository as we should never, *ever* keep keys in a repo, public or private.

5. Start the development server in the project's root directory:
    ```bash
    cd ..
    ```
    ```bash
    yarn dev
    ```

4. Once it's done compiling, view the site at: [`http://localhost:3000/`](http://localhost:3000/).

5. If you do not wish to use a personal or work Gmail login, I've supplied a throwaway Gmail account that is set up with a few existing deadlines. Please see the related email for the username and password.

6. Available tests may be run in the projects /client/ directory:
    ```bash
    yarn test
    ```

7. Don't forget to log out when you're done! I'm serious. Log out. It's a lot of fun.

## Notes on the Countdown component
I've chosen to use an external library to handle date formatting and diffing dates. If we were only doing days, hours, minutes, and seconds, that would be pretty easy! However, anything further than that is a WHOLE lot of logic that we can simply use a small library for, like leap years.. different days in months.. etc. DayJS to the rescue!

If you'd like to test this out for whatever reason, simply comment out lines 53-57 in koala-countdown/client/src/components/countdown/index.tsx and uncomment out lines 59-74.

-------

## Original project README

# Koala - Web Engineering Challenge

### The Backstory...
A high-profile client has hired your company to build a countdown clock web app to help them keep track of an internal deadline. Since this deadline keeps changing, the countdown must be able to be reset and adjusted as necessary.

The original developer tasked with building the app was too distracted watching episodes of Selling Sunset to pay attention to code quality, deadlines, or architectural best practices. It's unclear if the codebase even compiles. In a panic, your company has tasked you with both finishing the app and ensuring the code adheres to your own personal engineering standards.

### Requirements
We have intentionally kept this assignment open-ended, but here are the minimum requirements:

- There must be an input that takes a number or set of numbers that can be used to set and reset a countdown timer.
- To us, code quality is just as important as feature execution. Without being prescriptive, any decisions you make to refactor, test, style, or fix anything in the existing code are just as important as successfully building the countdown itself.

### Notes
- The codebase is intentionally sloppy. We want to encourage you to change any if not all of it as you see fit.
- We've connected the app to an API call that returns a configuration JSON. As you work on the app, we encourage you to use this data to help inform your styling.
- There is no limit to the scope of this project. Creativity, critical thinking, and an eye for stability and extensibility are paramount to the culture here at Koala.
- Enjoy yourself. We want you to show off. Make up requirements and solve problems we haven't asked you to solve if you think they'd be exciting to build. We want to see from you a genuine passion and a love of the craft.

### Dependencies
This codebase uses React, Typescript, and Styled Components as they are the primary dependencies used by the Koala frontends. Though you may change any existing code as you see fit, we ask that you do not change these dependencies (i.e. rewriting the app in Angular). However, feel free to add any additional dependencies as you see fit.

### Installation

1. Install [`Yarn`](https://yarnpkg.com/en/) and [`TypeScript`](https://www.typescriptlang.org)

2. Install the project dependencies:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    yarn start
    ```

4. Once it's done compiling, view the site at: [`http://localhost:3000/`](http://localhost:3000/).
