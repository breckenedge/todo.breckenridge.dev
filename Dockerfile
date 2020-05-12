FROM ruby:2.7.1-alpine

ENV RUBYOPT -W:no-deprecated
ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true
ENV BUILD_PACKAGES yarn nodejs npm build-base sqlite-dev tzdata
ENV BUNDLE_WITHOUT development:test
ENV BUNDLE_JOBS 5

RUN apk update --quiet && \
    apk upgrade --quiet && \
    apk add $BUILD_PACKAGES --quiet && \
    rm -rf /var/cache/apk

WORKDIR /code
COPY . /code/

RUN bin/bundle install --quiet
RUN SECRET_KEY_BASE=`bin/rails secret` bin/rails assets:precompile

EXPOSE 3000

CMD ["bin/rails", "server"]
