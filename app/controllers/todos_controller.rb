class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy, :complete]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.not_deleted

    respond_to do |format|
      format.html
      format.json { render json: @todos.as_json }
    end
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    respond_to do |format|
      format.html
      format.json { render json: @todo.as_json }
    end
  end

  # GET /todos/new
  def new
    @todo = Todo.new
    @todo.project = Project.find_by(id: params[:project_id])
  end

  # GET /todos/1/edit
  def edit; end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    respond_to do |format|
      if @todo.save
        format.html do
          redirect_to params.fetch("return_to", project_todo_path(@todo.project, @todo)), notice: "Todo was successfully created."
        end
        format.json { render json: @todo.as_json, status: :created }
      else
        format.html { render :new }
        format.json { render json: @todo.errors, status: :not_acceptable }
      end
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        if @todo.just_completed?
          @todo.todo_status_changes.create(status: :complete, id: SecureRandom.uuid)
        end

        format.html { redirect_to project_todo_path(@todo.project, @todo), notice: "Todo was successfully updated." }
        format.json { render json: @todo.as_json }
      else
        format.html { render :edit }
        format.json { render json: @todo.errors, status: :not_acceptable }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.update(deleted_at: Time.current)

    respond_to do |format|
      format.html { redirect_to project_todos_url(@todo.project), notice: "Todo was successfully destroyed." }
      format.json { render json: @todo.as_json }
    end
  end

  def complete
    @todo.update(status: :complete) && @todo.todo_status_changes.create(status: :complete, id: SecureRandom.uuid)

    respond_to do |format|
      format.html { redirect_to project_todo_url(@todo.project, @todo), notice: "Todo completed" }
      format.json { render json: @todo }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_todo
    @todo = Todo.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def todo_params
    params.require(:todo).permit(:id, :project_id, :name, :description, :due_date, :priority, :status, :deleted_at)
  end
end
