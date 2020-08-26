class ApplicationController < ActionController::Base
  before_action :require_user
  before_action :set_time_zone

  def current_user
    @current_user ||= if current_api_key
                        current_api_key.user
                      elsif session[:user_id]
                        User.find(session[:user_id])
                      end
  end

  def current_api_key
    return unless params[:email] && params[:api_key]

    APIKey.joins(:user).where(users: { email: params[:email] }).find_by(api_key: params[:api_key])
  end

  def require_user
    return if current_user

    respond_to do |format|
      format.html { redirect_to(log_in_path, notice: "You must log in to continue.") }
      format.json { render json: { error: "You must authenticate to continue." }, status: :unauthorized }
    end
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  helper_method :current_user
end
