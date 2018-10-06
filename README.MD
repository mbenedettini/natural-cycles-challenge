# Natural Cycles Challenge
## Author: Mariano Benedettini

### Creating migrations
`docker-compose exec server typeorm migration:create -n create-users`

### Manually running migrations
`docker-compose exec server npm run migration:run`
