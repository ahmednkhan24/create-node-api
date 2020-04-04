# create-node-app

Sets up a boilerplate node application using ES6 syntax, src, test, and prod directories with respective npm scripts, linting, environment variables, and dockerization.

## Node and NPM
* `npm install`
* Check package.json for available script commands

## Docker
* `docker build --tag create-node-app:latest .`
* `docker run -it -p 80:3000 create-node-app`
* `docker run -d -p 80:3000 my-app`
* `docker-compose up`