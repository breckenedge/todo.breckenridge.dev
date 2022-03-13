FROM ruby:3.1.1-alpine AS todo_base

ENV RUBYOPT -W:no-deprecated
ENV RAILS_LOG_TO_STDOUT true
ENV BUILD_PACKAGES yarn nodejs npm build-base sqlite-dev postgresql-dev tzdata
RUN apk add $BUILD_PACKAGES --no-cache --quiet
RUN mkdir /code
WORKDIR /code
COPY .ruby-version Gemfile Gemfile.lock ./
ENV BUNDLE_JOBS 5
ENV BUNDLE_PATH /gems
ENV BUNDLE_BIN /gems
ENV GEM_HOME /gems
RUN bundle check || bundle install --quiet
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean
COPY . /code/

FROM todo_base AS todo_production

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES 1
RUN SECRET_KEY_BASE=`/gems/rails secret` /gems/rails assets:precompile
EXPOSE 3000
CMD ["/gems/rails", "server", "-b 0.0.0.0"]
