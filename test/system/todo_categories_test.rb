require "application_system_test_case"

class TodoCategoriesTest < ApplicationSystemTestCase
  setup do
    @todo_category = todo_categories(:one)
  end

  test "visiting the index" do
    visit todo_categories_url
    assert_selector "h1", text: "Todo Categories"
  end

  test "creating a Todo category" do
    visit todo_categories_url
    click_on "New Todo Category"

    fill_in "Name", with: @todo_category.name
    click_on "Create Todo category"

    assert_text "Todo category was successfully created"
    click_on "Back"
  end

  test "updating a Todo category" do
    visit todo_categories_url
    click_on "Edit", match: :first

    fill_in "Name", with: @todo_category.name
    click_on "Update Todo category"

    assert_text "Todo category was successfully updated"
    click_on "Back"
  end

  test "destroying a Todo category" do
    visit todo_categories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Todo category was successfully destroyed"
  end
end
