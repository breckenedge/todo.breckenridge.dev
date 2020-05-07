class Project < ApplicationRecord
  has_many :project_estimates
  has_many :todos

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }
end
