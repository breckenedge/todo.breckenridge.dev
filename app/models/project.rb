class Project < ApplicationRecord
  has_many :todos, dependent: :destroy

  validates :name, presence: true
  validates :id, presence: true, uniqueness: true

  scope :not_deleted, -> { where(deleted_at: nil) }
end
