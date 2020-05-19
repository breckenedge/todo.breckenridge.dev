class ApplicationController < ActionController::Base
  before_action :require_user
  before_action :set_time_zone

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    redirect_to(log_in_path, notice: 'You must log in to continue.') unless current_user
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  helper_method :current_user
end
