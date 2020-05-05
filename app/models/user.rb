class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :time_zone, presence: true
end
