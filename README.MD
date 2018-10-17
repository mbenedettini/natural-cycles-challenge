# Natural Cycles Challenge
## Author: Mariano Benedettini

[![CircleCI](https://circleci.com/gh/mbenedettini/natural-cycles-challenge/tree/master.svg?style=svg)](https://circleci.com/gh/mbenedettini/natural-cycles-challenge/tree/master)

[![Coverage Status](https://coveralls.io/repos/github/mbenedettini/natural-cycles-challenge/badge.svg?branch=master)](https://coveralls.io/github/mbenedettini/natural-cycles-challenge?branch=master)

### Getting started: development environment

Just

`docker-compose up`

and the app will be up and running, then open your browser at `http://localhost:3000`

### Migrations

+ Creating migrations
`docker-compose exec server typeorm migration:create -n create-users`

+ Manually running migrations
`docker-compose exec server npm run migration:run`

### Notes: TODO
