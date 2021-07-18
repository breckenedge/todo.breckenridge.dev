require "test_helper"

class TodosControllerTest < ActionDispatch::IntegrationTest
  setup do
    log_in_as(users(:one))
    @todo = todos(:one)
  end

  test "should get index" do
    get project_todos_url(project_id: @todo.project_id)
    assert_response :success
  end

  test "should get new" do
    get new_project_todo_url(project_id: @todo.project_id)
    assert_response :success
  end

  test "should get complete" do
    get complete_project_todo_url(project_id: @todo.project_id, id: @todo.id)
    @todo.reload
    assert @todo.complete?
  end

  test "should add a completion status record on completion" do
    @todo.update(status: "incomplete")
    assert_difference -> { @todo.reload.todo_status_changes.count } do
      get complete_project_todo_url(project_id: @todo.project_id, id: @todo.id)
    end
  end

  test "should create todo" do
    id = SecureRandom.uuid

    assert_difference("Todo.count") do
      post project_todos_url(@todo.project), params: {
        todo: {
          project_id: @todo.project_id,
          id: id,
          description: @todo.description,
          due_date: @todo.due_date,
          name: @todo.name,
          priority: @todo.priority,
          status: @todo.status,
        },
      }
    end

    assert_redirected_to project_todo_url(@todo.project, id)
  end

  test "should show todo" do
    get project_todo_url(@todo.project, @todo)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_todo_url(@todo.project, @todo)
    assert_response :success
  end

  test "should update todo" do
    patch project_todo_url(@todo.project, @todo), params: {
      todo: {
        description: @todo.description,
        due_date: @todo.due_date,
        name: @todo.name,
        priority: @todo.priority,
        status: @todo.status,
      },
    }
    assert_redirected_to project_todo_url(@todo.project, @todo)
  end

  test "should add a completion entry when completed" do
    @todo.update(status: "incomplete")
    assert_difference -> { @todo.reload.todo_status_changes.count } do
      patch project_todo_url(@todo.project, @todo), params: {
        todo: {
          status: "complete",
        },
      }
    end
  end

  test "should not add a completion entry when already completed" do
    @todo.update(status: "complete")
    assert_no_difference -> { @todo.reload.todo_status_changes.count } do
      patch project_todo_url(@todo.project, @todo), params: {
        todo: {
          status: "complete",
        },
      }
    end
  end

  test "should not add a completion entry when incompleted" do
    @todo.update(status: "complete")
    assert_no_difference -> { @todo.reload.todo_status_changes.count } do
      patch project_todo_url(@todo.project, @todo), params: {
        todo: {
          status: "incomplete",
        },
      }
    end
  end

  test "should destroy todo" do
    assert_difference("Todo.not_deleted.count", -1) do
      delete project_todo_url(@todo.project, @todo)
    end

    assert_redirected_to project_todos_url(@todo.project)
  end
end
