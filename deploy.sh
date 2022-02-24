#!/bin/sh

# This script runs on the docker server to deploy the application. It can be kicked off locally via:
#
# ```
# ssh todo.breckenridge.dev < deploy.sh
# ```

set -e

mkdir -p $DEPLOY_PATH

cd $DEPLOY_PATH

echo 'Deleting dangling images'
yes | docker image prune

echo 'Pulling latest'
docker pull docker.pkg.github.com/breckenedge/todo.breckenridge.dev/todo:latest

echo 'Creating the database'
docker-compose -f docker-compose.prod.yml run web bin/rails db:create

echo 'Running migrations'
docker-compose -f docker-compose.prod.yml run web bin/rails db:migrate

echo 'Stopping the containers'
docker-compose -f docker-compose.prod.yml stop || true

until [ "`docker ps --filter 'name=todo' --format '{{.ID}}'`" == "" ]; do
	sleep 0.1;
done;

echo 'Starting the containers'
docker-compose -f docker-compose.prod.yml up -d
