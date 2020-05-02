class TodoCategory < ApplicationRecord
  has_many :todo_category_todos, dependent: :destroy
  has_many :todos, through: :todo_category_todos

  validates :name, presence: true, uniqueness: true
end
