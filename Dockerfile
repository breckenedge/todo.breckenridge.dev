FROM ruby:3.1.2 AS todo_base

ENV RAILS_LOG_TO_STDOUT true
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
ENV BUILD_PACKAGES nodejs build-essential libsqlite3-dev tzdata -y
RUN apt-get install $BUILD_PACKAGES
RUN npm install --global yarn
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
ENV RACK_ENV production
RUN SECRET_KEY_BASE=1 /gems/rails assets:precompile
EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
