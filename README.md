# Tic-Tac-Toe

## Overview

This is an example of how I would implement Tic-Tac-Toe using React.js as front-end and Appwrite/Nest.js for back-end.

## How to run

### Build shared library
Go to SharedLibrary and run...

```bash
$ npm run build
```

### Install Appwrite
Install Appwrite
Create a "Tic-Tac-Toe" project in Appwrite

### Setup enviroment variables
Create and fill out an .env file for the CLI, NodeAPI and ReactClient projects. See .env.example files for help.

### Setup Appwrite
Go to CLI folder and use theese commands...

```bash
$ npm install
$ npm run setup
$ npm run create
$ npm run update
```

### Start Client
Go to the ReactClient folder and run...

```bash
$ npm install
$ npm run start
```

### Start Server
Go to NodeAPI folder and run...

```bash
$ npm install
$ npm run start:dev
Go to localhost:3000
```

## Thoughts

* Appwrite was used as a part of the backend. It lacks some pretty important features like database transactions and functionality to setup a new project without manual work. But I wanted to try it out as an alternative to Firebase. I will fix this as Appwrite is updated.
