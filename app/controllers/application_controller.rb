class ApplicationController < ActionController::Base
  before_action :require_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    redirect_to(log_in_path) unless current_user
  end

  helper_method :current_user
end
