class SearchController < ApplicationController
  # GET /search
  def index
    @results = []

    if params[:q]
      @results += Todo.where("name LIKE ?", "%#{params[:q]}%").to_a
      @results += Project.where("name LIKE ?", "%#{params[:q]}%").to_a
    end

    @results.sort_by(&:name)
  end
end
