FROM ruby:3.0.1-alpine

ENV RUBYOPT -W:no-deprecated
ENV RAILS_LOG_TO_STDOUT true
ENV BUILD_PACKAGES yarn nodejs npm build-base sqlite-dev tzdata
ENV BUNDLE_JOBS 5

RUN apk add $BUILD_PACKAGES --no-cache --quiet

WORKDIR /code
COPY . /code/

RUN bin/bundle install --quiet && \
    yarn install && \
    yarn cache clean && \
    SECRET_KEY_BASE=`bin/rails secret` bin/rails assets:precompile

EXPOSE 3000

CMD ["bin/rails", "server"]
