class APIKeysController < ApplicationController
  # POST /api_keys
  def create
    current_user.api_keys.create(api_key: SecureRandom.alphanumeric(32))
    redirect_to profile_path, notice: "API key created"
  end

  # DELETE /api_keys/:id
  def destroy
    api_key = current_user.api_keys.find(params[:id])
    api_key.destroy
    redirect_to profile_path, notice: "API key deleted"
  end
end
