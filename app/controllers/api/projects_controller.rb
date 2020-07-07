module Api
  class ProjectsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # GET /api/projects.json
    def index
      render json: Project.all.as_json
    end

    # GET /api/projects/:id.json
    def show
      render json: Project.find(params[:id]).as_json
    end

    def create
      project = Project.new(project_params)

      if project.save
        render json: project.as_json
      else
        head :not_acceptable
      end
    end

    # PUT /api/projects/:id.json
    def update
      project = Project.find(params[:id])

      if project.update(project_params)
        render json: project.as_json
      else
        head :not_acceptable
      end
    end

    # DELETE /api/projects/:id
    def destroy
      project = Project.find(params[:id])
      project.destroy
      head :ok
    end

    # GET /api/projects/:id/todos.json
    def todos
      todos = Todo.where(project_id: params[:id])
      render json: todos.as_json
    end

    private

    def project_params
      params.require(:project).permit(:name, :due_date, :details, :status, :estimates_enabled)
    end
  end
end
