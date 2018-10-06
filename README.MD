# Natural Cycles Challenge
## Author: Mariano Benedettini

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
