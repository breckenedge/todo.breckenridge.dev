module TodoCategoriesHelper
  def todo_category_todos_count(todo_category)
    content_tag(:span, todo_category.todos.count, class: 'badge')
  end
end
