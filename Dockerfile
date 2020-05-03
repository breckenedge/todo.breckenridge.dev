FROM ruby:2.7.1

ENV DEBIAN_FRONTEND noninteractive
ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true

RUN echo "deb https://deb.nodesource.com/node_12.x/ buster main" | tee /etc/apt/sources.list.d/node.list && \
    wget --quiet -O - wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -yqq && \
    apt-get install -yqq libsqlite3-dev nodejs yarn

WORKDIR /code
COPY . /code/

RUN bin/bundle config set without 'development test'
RUN bin/bundle install --quiet --jobs=5
RUN SECRET_KEY_BASE=`bin/rails secret` bin/rails assets:precompile

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
