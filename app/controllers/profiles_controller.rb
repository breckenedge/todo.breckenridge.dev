class ProfilesController < ApplicationController
  def edit; end

  def update
    if current_user.update(params.require(:user).permit(:email, :time_zone))
      redirect_to profile_path, notice: "Profile updated"
    else
      render :show
    end
  end
end
