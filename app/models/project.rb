class Project < ApplicationRecord
  has_many :estimates, dependent: :destroy
  has_many :todos, dependent: :destroy

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }
end
