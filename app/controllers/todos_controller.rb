class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy, :complete, :incomplete]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all

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
          redirect_to params.fetch("return_to", todo_path(@todo)), notice: "Todo was successfully created."
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
        format.html { redirect_to todo_path(@todo), notice: "Todo was successfully updated." }
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
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: "Todo was successfully destroyed." }
      format.json { render json: @todo.as_json }
    end
  end

  def complete
    @todo.update(status: :complete) && @todo.todo_status_changes.create(status: :complete, id: SecureRandom.uuid)

    respond_to do |format|
      format.html { redirect_to todo_url(@todo), notice: "Todo completed" }
      format.json { render json: @todo }
    end
  end

  def incomplete
    @todo.update(status: :incomplete) && @todo.todo_status_changes.create(status: :incomplete, id: SecureRandom.uuid)

    respond_to do |format|
      format.html { redirect_to todo_url(@todo), notice: "Todo incompleted" }
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
    params.require(:todo).permit(:id, :project_id, :name, :description, :due_on, :priority, :status)
  end
end
