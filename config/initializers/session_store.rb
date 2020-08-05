Rails.application.config.session_store :cookie_store, expire_after: ENV.fetch("SESSION_DURATION", 604_800).to_i
