# Thank you for checking this calculator application. In this README file you will find information on:
* application features
* tech stack
* details on how to get this application started on your device
* images showing what the application looks like.

## Features
* takes text or string as input
* supports positive, negative, and decimal numbers
* supports +, -, *, and / operations
* supports parentheses
* Jest testing framework
* Enzyme testing utility

## Setup
Install packages:
```sh
npm install
```

Install live-server:
```sh
npm install -g live-server
```

Compile JavaScript modules:
```sh
npm run build
```

Start live-server: CD into 'public' directory:
```sh
live-server
```
NOTE: if you do not CD into the "public" directory live-server will not work properly since I am using the React Router

# To run test
CD to the root directory
```sh
npm test
```

## Tech Stack
* React
* SASS
* Jest testing framework
* Enzyme testing utility

## Images
Home page:

![alt text](https://calculator-vm.s3-us-west-1.amazonaws.com/home.png)

Calculator page:
![alt text](https://calculator-vm.s3-us-west-1.amazonaws.com/calc.png)

Saved Calculation page:
![alt text](https://calculator-vm.s3-us-west-1.amazonaws.com/saved.png)
