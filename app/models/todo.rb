class Todo < ApplicationRecord
  belongs_to :project, optional: false
  has_many :todo_status_changes, dependent: :delete_all

  validates :name, presence: true
  validates :id, presence: true, uniqueness: true

  enum status: { incomplete: 0, complete: 1 }

  scope :completed_last_week, -> { complete.where(id: TodoStatusChange.completed_last_week.select(:todo_id)) }
  scope :late, -> { incomplete.where("due_date NOT NULL and due_date < ?", Date.current) }
  scope :deleted, -> { joins(:project).where.not(deleted_at: nil).or(where.not(projects: { deleted_at: nil })) }
  scope :not_deleted, -> { where.not(id: deleted.select(:id)) }
  scope :today, -> { where(due_date: Date.current) }

  def just_completed?
    previous_changes.key?("status") && previous_changes.dig("status", 0) != "complete" && complete?
  end
end
