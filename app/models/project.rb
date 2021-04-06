class Project < ApplicationRecord
  has_many :todos, dependent: :destroy

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }
end
