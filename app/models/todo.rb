class Todo < ApplicationRecord
  belongs_to :project, optional: true
  has_many :todo_status_changes, dependent: :delete_all

  validates :name, presence: true
  validates :id, presence: true, uniqueness: true

  enum status: { incomplete: 0, complete: 1 }

  scope :completed_last_week, -> { complete.where(id: TodoStatusChange.completed_last_week.select(:todo_id)) }
  scope :late, -> { incomplete.where("due_date NOT NULL and due_date < ?", Date.current) }

  def late?
    incomplete? && due_date && due_date < Date.current
  end
end
