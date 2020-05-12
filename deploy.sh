#!/bin/sh

set -e

docker pull docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest

docker run -it --rm -e RAILS_MASTER_KEY=$(cat config/master.key) -v "/var/lib/docker/volumes/todo_db/_data/production.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails db:migrate

docker container stop todo

docker run --rm --name todo -d -p 3000:3000 -e RAILS_MASTER_KEY=$(cat config/master.key) -v "/var/lib/docker/volumes/todo_db/_data/production.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails s
