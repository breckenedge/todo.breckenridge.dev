require 'test_helper'

class TodoCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @todo_category = todo_categories(:one)
  end

  test "should get index" do
    get todo_categories_url
    assert_response :success
  end

  test "should get new" do
    get new_todo_category_url
    assert_response :success
  end

  test "should create todo_category" do
    assert_difference('TodoCategory.count') do
      post todo_categories_url, params: { todo_category: { name: @todo_category.name } }
    end

    assert_redirected_to todo_category_url(TodoCategory.last)
  end

  test "should show todo_category" do
    get todo_category_url(@todo_category)
    assert_response :success
  end

  test "should get edit" do
    get edit_todo_category_url(@todo_category)
    assert_response :success
  end

  test "should update todo_category" do
    patch todo_category_url(@todo_category), params: { todo_category: { name: @todo_category.name } }
    assert_redirected_to todo_category_url(@todo_category)
  end

  test "should destroy todo_category" do
    assert_difference('TodoCategory.count', -1) do
      delete todo_category_url(@todo_category)
    end

    assert_redirected_to todo_categories_url
  end
end
