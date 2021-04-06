class Project < ApplicationRecord
  has_many :todos, dependent: :destroy

  validates :name, presence: true
  validates :id, presence: true, uniqueness: true

  enum status: { incomplete: 0, complete: 1 }
end
