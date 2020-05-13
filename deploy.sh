#!/bin/sh

# This script runs on the docker server to deploy the application. It can be kicked off locally via:
#
# ```
# ssh todo.breckenridge.dev "RAILS_MASTER_KEY=$(cat config/master.key) sh -s" < deploy.sh
# ```

set -e

echo 'Pulling latest'
docker pull docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest

echo 'Running migrations'
docker run --rm -e RAILS_MASTER_KEY=$RAILS_MASTER_KEY -v "/var/lib/docker/volumes/todo_db/_data/production.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails db:migrate

echo 'Stopping the container'
docker container stop todo || true

until [ "`docker ps --filter 'name=todo' --format '{{.ID}}'`" == "" ]; do
	sleep 0.1;
done;

echo 'Starting the container'
docker run --rm --name todo -d -p 3000:3000 -e RAILS_MASTER_KEY=$RAILS_MASTER_KEY -v "/var/lib/docker/volumes/todo_db/_data/production.sqlite3:/code/db/production.sqlite3" docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest rails s
