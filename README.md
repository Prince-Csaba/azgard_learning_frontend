### Tracking learning progress (MERN based school project)

## Main technologies:

![](https://img.shields.io/badge/MongoDB-1.0.0-red)
![](https://img.shields.io/badge/Express%20JS-4.16.1-lightgrey)
![](https://img.shields.io/badge/React-17.0.1-blue)
![](https://img.shields.io/badge/Node%20JS-12.22.5-brightgreen)
![](https://img.shields.io/badge/Mongoose-5.13.5-%237C0A02)
![](https://img.shields.io/badge/Javascript-ES6-yellow)
![](https://img.shields.io/badge/Jest-27.0.6-yellowgreen)
![](https://img.shields.io/badge/Axios-0.21.1-purple)
![](https://img.shields.io/badge/CORS-2.8.5-lightgrey)
![](https://img.shields.io/badge/Jwt-8.5.1-purple)
![](https://img.shields.io/badge/Morgan-1.9.1-lightblue)

## Introduction:

This web aplication is a small school project, its main task is to track the progress of a student in a given learning path.
The ideea behind the project is to be an MVP, so it contains all the basic, and most important features, and it is easy to fill with lessons and easy to scale up with the understanding of the logic behind the project.

## Table of contents
* [Technologies](#technologies)
* [Introduction](#introduction)
* [Installations](#installation)
* [Configure .env variables](#Configure)
* [Launch via Docker](#Launch)
* [API Documentation](#API)




## Installation

1. Fork the github repository:

2. Clone the github repo to your pc.

3. Install the dependencies
  * Backend
    Inside the projects directory, change working directory to ../backend, than run npm install command
    ```
      $ cd ../backend
      $ npm install
    ```
  * Frontend
    Inside the projects directory, change working directory to ../frontend, than run npm install command
    ```
      $ cd ../backend
      $ npm install
    ```

   *in case of not having NodeJS on your computer, you have install the NodeJS for the backend (see documentation at https://nodejs.org/)

  *to run in a proper way, you have to build the frontend react app into html+css by running the npm run build command
    ```
      $ npm run build
    ```

 ## Configure the .env variables

  *Backend
  PORT=8000
    MONGODB_URI="mongodb://127.0.0.1:27017/azgard"
    TOKEN_SECRET = thisisasecrettoken
    CLIENT_ID = 657899331675-fr3vkhlvd1836sd7t1id2c9ik2pu3hen.apps.googleusercontent.com
    CLIENT_SECRET = lQmYXb9e8sf85S0ZbIZruuDN

## Launch the application via Docker

  Both at backend and frontend u can run the application by typeing: docker-compose:up

## API Documentation

  For swagger documentation type the url to your browser: