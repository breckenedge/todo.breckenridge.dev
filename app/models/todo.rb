class Todo < ApplicationRecord
  belongs_to :project, optional: true

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }

  def late?
    incomplete? && due_on && due_on < Date.today
  end
end
