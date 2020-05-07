class ProjectEstimatesController < ApplicationController
  before_action :set_project_estimate, only: [:show, :edit, :update, :destroy]

  # GET /project_estimates
  # GET /project_estimates.json
  def index
    @project_estimates = ProjectEstimate.all
  end

  # GET /project_estimates/1
  # GET /project_estimates/1.json
  def show
  end

  # GET /project_estimates/new
  def new
    @project_estimate = ProjectEstimate.new(project: Project.find_by(id: params[:project_id]))
  end

  # GET /project_estimates/1/edit
  def edit
  end

  # POST /project_estimates
  # POST /project_estimates.json
  def create
    @project_estimate = ProjectEstimate.new(project_estimate_params)

    respond_to do |format|
      if @project_estimate.save
        format.html { redirect_to @project_estimate, notice: 'Project estimate was successfully created.' }
        format.json { render :show, status: :created, location: @project_estimate }
      else
        format.html { render :new }
        format.json { render json: @project_estimate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_estimates/1
  # PATCH/PUT /project_estimates/1.json
  def update
    respond_to do |format|
      if @project_estimate.update(project_estimate_params)
        format.html { redirect_to @project_estimate, notice: 'Project estimate was successfully updated.' }
        format.json { render :show, status: :ok, location: @project_estimate }
      else
        format.html { render :edit }
        format.json { render json: @project_estimate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_estimates/1
  # DELETE /project_estimates/1.json
  def destroy
    @project_estimate.destroy
    respond_to do |format|
      format.html { redirect_to project_estimates_url, notice: 'Project estimate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_estimate
      @project_estimate = ProjectEstimate.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_estimate_params
      params.require(:project_estimate).permit(:project_id, :vendor, :estimate, :contact, :phone, :details, :date)
    end
end
