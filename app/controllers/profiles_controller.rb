class ProfilesController < ApplicationController
  def edit; end

  def update
    if current_user.update(params.require(:user).permit(:email, :time_zone))
      render json: current_user.as_json.slice("id", "email", "time_zone"), status: :ok
    else
      render json: { errors: current_user.errors }, status: :not_acceptable
    end
  end
end
