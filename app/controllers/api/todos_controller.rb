module Api
  class TodosController < ApplicationController
    # GET /api/todos.json
    def index
      render json: Todo.all.as_json
    end
  end
end
