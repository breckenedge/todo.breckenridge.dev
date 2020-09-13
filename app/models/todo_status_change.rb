class TodoStatusChange < ApplicationRecord
  belongs_to :todo

  enum status: { incomplete: 0, complete: 1 }

  scope :completed_last_week, -> { complete.where("created_at > ?", 7.days.ago) }
end
