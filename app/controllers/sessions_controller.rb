class SessionsController < ApplicationController
  skip_before_action :require_user

  def new; end

  def create
    @user = User.find_by(email: params[:log_in][:email])

    respond_to do |format|
      if @user&.authenticate(params[:log_in][:password])
        session[:user_id] = @user.id
        format.json { render json: { currentUser: @user } }
        format.html { redirect_to root_path }
      else
        format.json { render json: { error: "Invalid credentials" }, status: :unauthorized }
        format.html { render :new }
      end
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "Logged out"
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :ok }
    end
  end
end
