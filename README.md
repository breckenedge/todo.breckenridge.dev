# https://todo.breckenridge.dev

## Contributing

### Run the test suite

Run `bin/rake` to run the test suite.

### Deployment instructions

Automatic tests and deployments occur via Github Actions. Just push the `main` branch to kick off a build and deploy it if it passes tests.

## Deployment

### Install Certs

Optionally install SSL certificates

```sh
service nginx stop
certbot certonly
```

### .env

Based on the `.env.sample` file in this repo, create a `.env` file that meets your needs.

### Pull image

```sh
docker pull docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest
```

### Initialize the database

```sh
docker run -it --rm --env-file=.env -v "/path/to/db.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails db:create
```

### Run migrations

```sh
docker run -it --rm --env-file=.env -v "/path/to/db.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails db:migrate
```

### Stop container

```
docker container stop todo
```

### Start container

```
docker run --rm --name todo -d -p 3000:3000 --env-file=.env -v "/path/to/db.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails s
```

### Mail delivery

You can use cron to automatically schedule email deliver, for example:

```
0 5 * * * docker run --rm --env-file=.env -v "/path/to/db.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails runner "TodoMailer.daily_digest.deliver"
```

### Abnormal Operations

#### Interactive Rails Console

```sh
docker run --rm -it --env-file=.env -v "/path/to/db.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails c
```
