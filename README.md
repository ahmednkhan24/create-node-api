# create-node-app

Sets up a boilerplate node application using ES6 syntax, src, test, and prod directories with respective npm scripts, linting, environment variables, and dockerization.

## Docker Commands
* docker build --tag create-node-app:latest .
* docker run -it -p 80:3000 create-node-app
* docker run -d -p 80:3000 my-app