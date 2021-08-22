### Tracking learning progress (Project Azgard)

## Technologies

## Introduction:

This web aplication is a small school project, its main task is to track the progress of a student in a given learning path.
The ideea behind the project is to be an MVP, so it contains all the basic, and most important features, and it is easy to fill with lessons and easy to scale up with the understanding of the logic behind the project.

## Table of contents
* [Technologies](#technologies)
* [Introduction](#introduction)
* [Installations](#installation)
* [Configure .env variables](#setup)
* [Launch via Docker](#setup)
* [API Documentation](#setup)




## Installation

1. Fork the github repository:

2. Clone the github repo to your pc.

3. Install the dependencies
  * Backend
    Change working directory to ../backend, than run npm install command
    ```
      $ cd ../lorem
      $ npm install
      $ npm start
    ```
  * Frontend
    Change working directory to ../frontend, than run npm install command

  -in case of not having NodeJS on your computer, you have install the NodeJS for the backend (see documentation at https://nodejs.org/)

  -to run in a proper way, you have to build the react app into html+css by running the npm run build command

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