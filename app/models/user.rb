class User < ApplicationRecord
  has_secure_password
  has_many :api_keys, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  validates :time_zone, presence: true
end
