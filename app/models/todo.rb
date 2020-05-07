class Todo < ApplicationRecord
  belongs_to :project, optional: true
  has_many :todo_category_todos, dependent: :destroy
  has_many :todo_categories, through: :todo_category_todos

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }
end
