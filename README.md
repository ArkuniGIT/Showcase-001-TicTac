# Tic-Tac-Toe

## Overview

This is an example of how I would implement Tic-Tac-Toe using React.js as front-end and Appwrite/Nest.js for back-end.

## How to run

* Go to SharedLibrary and run...
$ npm run build
* Install Appwrite
* Create a "Tic-Tac-Toe" project in Appwrite
* Create and fill out an .env file for the CLI, NodeAPI and ReactClient projects.
* Go to CLI and use theese commands...
$ npm install
$ npm run setup
$ npm run create
$ npm run update
* Go to the ReactClient project and run...
$ npm install
$ npm run start
* Go to NodeAPI and run...
$ npm install
$ npm run start:dev
* Go to localhost:3000

## Thoughts

* Appwrite was used as a part of the backend. It lacks some pretty important features like database transactions and functionality to setup a new project without manual work. But I wanted to try it out as an alternative to Firebase. I will fix this as Appwrite is updated.
