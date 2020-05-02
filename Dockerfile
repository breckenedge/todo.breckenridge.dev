FROM ruby:2.7.1

ENV DEBIAN_FRONTEND noninteractive

RUN echo "deb https://deb.nodesource.com/node_12.x/ buster main" | tee /etc/apt/sources.list.d/node.list && \
    wget --quiet -O - wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add && \
    apt-get update -yqq && \
    apt-get install -yqq libsqlite3-dev nodejs

WORKDIR /code
COPY . /code/

RUN bundle install --quiet

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
