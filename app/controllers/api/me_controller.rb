class Api::MeController < ApplicationController
  # GET /api/me.json
  def show
    if current_user
      render json: current_user.as_json.except('password_digest')
    else
      head :no_content
    end
  end
end
