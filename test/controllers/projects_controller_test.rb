require "test_helper"

class ProjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    log_in_as(users(:one))
    @project = projects(:one)
  end

  test "should get index" do
    get projects_url
    assert_response :success
  end

  test "should get new" do
    get new_project_url
    assert_response :success
  end

  test "should create project" do
    id = SecureRandom.uuid

    assert_difference("Project.count") do
      post projects_url, params: {
        project: {
          id:,
          due_date: @project.due_date,
          name: @project.name,
        },
      }
    end

    assert_redirected_to project_url(id)
  end

  test "should show project" do
    get project_url(@project)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_url(@project)
    assert_response :success
  end

  test "should update project" do
    patch project_url(@project), params: { project: { due_date: @project.due_date, name: @project.name } }
    assert_redirected_to project_url(@project)
  end

  test "should destroy project" do
    assert_difference("Project.not_deleted.count", -1) do
      delete project_url(@project)
    end

    assert_redirected_to projects_url
  end
end
