class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :complete, :incomplete]

  # GET /projects
  def index
    @projects = Project.order(:status, :name)
  end

  # GET /projects/1
  def show; end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit; end

  # POST /projects
  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: "Project was successfully created." }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /projects/1
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: "Project was successfully updated." }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: "Project was successfully destroyed." }
    end
  end

  # POST /projects/1/complete
  def complete
    @project.update!(status: :complete)
    redirect_to params.fetch(:return_to, project_path(@project)), notice: "Project completed"
  end

  # POST /projects/1/incomplete
  def incomplete
    @project.update!(status: :incomplete)
    redirect_to params.fetch(:return_to, project_path(@project)), notice: "Project incompleted"
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_project
    @project = Project.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def project_params
    params.require(:project).permit(:name, :due_date, :details, :status, :estimates_enabled)
  end
end
