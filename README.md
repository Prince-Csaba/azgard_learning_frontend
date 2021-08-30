# Tracking learning progress (MERN based school project)

## Main technologies

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

## Introduction

This web aplication is a small school project, its main task is to track the progress of a student in a given learning path.
The ideea behind the project is to be an MVP, so it contains all the basic, and most important features, and it is easy to fill with lessons and easy to scale up with the understanding of the logic behind the project.

## Table of contents
- [Tracking learning progress (MERN based school project)](#tracking-learning-progress-mern-based-school-project)
  - [Main technologies](#main-technologies)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Launch for production (via Docker)](#launch-for-production-via-docker)
  - [Launch for development](#launch-for-development)
  - [Configure the .env variable](#configure-the-env-variable)
  - [API Documentation](#api-documentation)

## Launch for production (via Docker)

1. Fork the github repository:

2. Clone the github repo to your pc.
    ```
      $ git clone {insert the name of your repository here}
    ```
3. Check for the .env variable, if it does not exist, create as described in step [Configure .env variables](#configure-the-env-variable)

4. Build the docker image of the frontend:
    Set the frontend directory as your working directory
    ```
    cd frontend
    ```
    If already in frontend directory, build the docker image by running this command in your terminal:
    ```
    $ docker build -t trainingfront .
    ```
    Optional: you can check your docker images with the command above to see if the image was created correctly:
    ```
    $ docker images
    ```
    You can run the image:
    ```
    $ docker run -d -p 3000:80 --name react-app trainingfront:latest
    ```

5. Build the docker image of the backend:
    Set the backend directory as your working directory
    ```
    cd backend
    ```
    If already in backend directory, build the docker image by running this command in your terminal:
    ```
    $ docker build -t trainingback .
    ```
    Optional: you can check your docker images with the command above to see if the image was created correctly:
    ```
    $ docker images
    ```
    You can run the image:
    ```
    $ docker run -d -p 8000:8000 --name react-app trainingback:latest
    ```
6. Run the aplication by docker-compose:
    As you built the frontend and backend docker images, time come to run the aplication.
    Type the following command into your console:
    ```
    $ docker-compose up
    ```

7. Stop the application whenever you want:
    ```
    $ docker-compose stop
    ```

## Launch for development

1. Fork the github repository:

2. Clone the github repo to your pc.
    ```
      $ git clone {insert the name of your repository here}
    ```
3. Check for the .env variable, if it does not exist, create as described in step [Configure .env variables](#Configure_the_env_variable)

3. Install the dependencies
  * Backend
    Inside the projects directory, change working directory to ./backend, than run npm install command
    ```
      $ cd ./backend
      $ npm install
    ```
  * Frontend
    Inside the projects directory, change working directory to ./frontend, than run npm install command
    ```
      $ cd ./fontend
      $ npm install
    ```
   *in case of not having NodeJS on your computer, you have install the NodeJS for the backend (see documentation at https://nodejs.org/)

4. Start the application:
  You can start the application by running npm start command both in frontend and in backend directories
    ```
    npm start
    ``` 

 ## Configure the .env variable

  Fill in your data in .env.template files at both backend&frontend and rename to .env
  Google console infos at: Obtain OAuth 2.0 credentials at [Google API Console](https://console.cloud.google.com)

  ## API Documentation

  You can find the endpoint documentation at: /backend/docs/api_documentation.yaml