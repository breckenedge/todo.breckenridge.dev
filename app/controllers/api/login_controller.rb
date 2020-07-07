module Api
  class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token

    # POST /api/login
    def create
      user = User.find_by(email: params[:email])

      if user&.authenticate(params[:password])
        render json: user.as_json.except(:password_digest)
      else
        head :not_authorized
      end
    end
  end
end
