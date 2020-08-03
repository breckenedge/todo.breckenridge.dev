class Todo < ApplicationRecord
  belongs_to :project, optional: true

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }

  scope :late, -> { where("due_on NOT NULL and due_on < ?", Date.current).incomplete }

  def late?
    incomplete? && due_on && due_on < Date.current
  end
end
