class TodoCategoryTodo < ApplicationRecord
  belongs_to :todo
  belongs_to :todo_category
end
