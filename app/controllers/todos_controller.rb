class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy, :complete, :incomplete]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all.order("CASE WHEN due_on IS NULL THEN '9999-12-31' ELSE due_on END", status: :asc)

    if params[:q]
      @todos = @todos.where('name like ?', "%#{params[:q]}%")
    end

    if params[:todo_category_id]
      @todo_category = TodoCategory.find(params[:todo_category_id])
      @todos = @todos.joins(:todo_category_todos).where(todo_category_todos: { todo_category_id: @todo_category.id })
    end

    @dates = @todos.group_by(&:due_on)
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

  # GET /todos/new
  def new
    @todo = Todo.new
    @todo.todo_categories = [TodoCategory.find(params[:todo_category_id])] if params[:todo_category_id]
    @todo.project = Project.find_by(id: params[:project_id])
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    respond_to do |format|
      if @todo.save
        format.html { redirect_to todo_path(@todo), notice: 'Todo was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        format.html { redirect_to todo_path(@todo), notice: 'Todo was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: 'Todo was successfully destroyed.' }
    end
  end

  def complete
    @todo.update(status: :complete)
    respond_to do |format|
      format.html { redirect_to todo_path(@todo), notice: 'Todo completed.' }
    end
  end

  def incomplete
    @todo.update(status: :incomplete)
    respond_to do |format|
      format.html { redirect_to todo_path(@todo), notice: 'Todo uncompleted.' }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:project_id, :name, :description, :due_on, :priority, :status, todo_category_ids: [])
    end
end
