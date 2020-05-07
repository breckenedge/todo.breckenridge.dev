require 'test_helper'

class ProjectEstimatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_estimate = project_estimates(:one)
  end

  test "should get index" do
    get project_estimates_url
    assert_response :success
  end

  test "should get new" do
    get new_project_estimate_url
    assert_response :success
  end

  test "should create project_estimate" do
    assert_difference('ProjectEstimate.count') do
      post project_estimates_url, params: { project_estimate: { contact: @project_estimate.contact, phone: @project_estimate.phone, project_id: @project_estimate.project_id, vendor: @project_estimate.vendor } }
    end

    assert_redirected_to project_estimate_url(ProjectEstimate.last)
  end

  test "should show project_estimate" do
    get project_estimate_url(@project_estimate)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_estimate_url(@project_estimate)
    assert_response :success
  end

  test "should update project_estimate" do
    patch project_estimate_url(@project_estimate), params: { project_estimate: { contact: @project_estimate.contact, phone: @project_estimate.phone, project_id: @project_estimate.project_id, vendor: @project_estimate.vendor } }
    assert_redirected_to project_estimate_url(@project_estimate)
  end

  test "should destroy project_estimate" do
    assert_difference('ProjectEstimate.count', -1) do
      delete project_estimate_url(@project_estimate)
    end

    assert_redirected_to project_estimates_url
  end
end
