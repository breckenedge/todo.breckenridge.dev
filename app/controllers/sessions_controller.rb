class SessionsController < ApplicationController
  skip_before_action :require_user

  def new; end

  def create
    @user = User.find_by(email: params[:log_in][:email])

    if @user&.authenticate(params[:log_in][:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      reset_session
      render :new
    end
  end

  def destroy
    reset_session
    flash[:notice] = "Logged out"
    redirect_to root_path
  end
end
