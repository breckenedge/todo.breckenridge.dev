class SearchController < ApplicationController
  # GET /search
  def index
    if params[:q]
      todos = Todo.where('name LIKE ?', "%#{params[:q]}%").to_a
      projects = Project.where('name LIKE ?', "%#{params[:q]}%").to_a

      @results = (todos + projects).sort_by(&:name)
    end
  end
end
