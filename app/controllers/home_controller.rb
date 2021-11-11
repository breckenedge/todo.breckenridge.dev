class HomeController < ApplicationController
  # GET /today
  def today
    respond_to do |format|
      format.html { render(:index) }
    end
  end
end
