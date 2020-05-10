class Estimate < ApplicationRecord
  belongs_to :project

  validates :vendor, presence: true
end
