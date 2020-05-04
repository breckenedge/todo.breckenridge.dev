FROM ruby:2.7.1-alpine

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true
ENV BUILD_PACKAGES yarn nodejs npm build-base sqlite-dev tzdata

RUN apk update && apk upgrade && apk add $BUILD_PACKAGES && rm -rf /var/cache/apk

WORKDIR /code
COPY . /code/

RUN bin/bundle config set without 'development test'
RUN bin/bundle install --quiet --jobs=5
RUN SECRET_KEY_BASE=`bin/rails secret` bin/rails assets:precompile

EXPOSE 3000

CMD ["bin/rails", "server"]
