# Natural Cycles Challenge
## Author: Mariano Benedettini

[![CircleCI](https://circleci.com/gh/mbenedettini/natural-cycles-challenge/tree/master.svg?style=svg)](https://circleci.com/gh/mbenedettini/natural-cycles-challenge/tree/master)

[![Coverage Status](https://coveralls.io/repos/github/mbenedettini/natural-cycles-challenge/badge.svg?branch=master)](https://coveralls.io/github/mbenedettini/natural-cycles-challenge?branch=master)


App is live at https://nc-mariano.now.sh

CircleCI workflows at https://circleci.com/gh/mbenedettini/workflows/natural-cycles-challenge

### Getting started: development environment

Just `docker-compose up` and the app will be up and running, then open your browser at `http://localhost:3000`

DB container does not have a volume on purpose to avoid polluting your environment, but I have left the required lines to persist it commented out in the compose file.

You can also run the client in dev mode, just open a 2nd terminal, go to `client` and then `npm ci && npm start`. Client dev server will be available at `http://localhost:4200`.

### Architecture overview

App is just a simple Express app with one main router: `src/routes/users.ts`.

I have chosen Postgres as the DB engine regardless in the challenge specs MongoDB was suggested, just for fun. Production db is hosted at https://www.elephantsql.com/.

CircleCI workflow consists of three steps: build, test and deploy and is pretty much dockerized. I have used a technique that I had already used in other projects, which consists in using an external repository as Docker cache. This makes the build process blazingly fast. Deploys are triggered with every push to `master` since I like to use `develop` as an integration branch. Tests are in a separate step so that they can be parallelized if needed.

Client was written in Angular since is the client library I'm most familiar with nowadays.

An improvement off the top of my head is that I could have used just a simple Dockerfile containing `FROM marianobe/nc` for the Now deployment (and do the heavy production build within CircleCI).

New things that I have learned while working on this challenge:
  + [TypeORM](https://github.com/typeorm/typeorm): I was already familiar with Sequelize but since it does not have first-class Typescript support I've decided to try something new
  + Now.sh: I'd heard of it but never tried it before. Took me some time to take the image below 100mb.
  + Jest: I was already familiar with Mocha but just wanted to try it out
  
Tests are testing the users router. An improvement could be separate the rest api from the logic handling requests, ending up with a controller decoupled from the web api. This controller would receive, for example when creating a user, just the email address and return the recently created user. This would allow the app to be more testable or at least testable in a more fine-grained level (the way to unit testing).




### Migrations

Existing migrations are automatically run at startup, but just in case:

+ Creating migrations
`docker-compose exec server npx typeorm migration:create -n create-users`

+ Manually running migrations
`docker-compose exec server npm run migration:run`

### Things that I think this app requires in order to be production-ready:

+ Auth (I haven't had the time)
+ Every DB operation should be wrapped in a `try/catch` block and properly handled: notify Sentry or similar and return a friendly error message to the user. Right now if, for example, an insert fails the database error will reach the user.
+ It would be nice to have another layer between Express and TypeORM, like I mentioned in Architecture overview. Sometimes referenced as a Service layer in past projects I've worked in.
+ 
