class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true # rubocop:disable Rails/UniqueValidationWithoutIndex
  validates :time_zone, presence: true
end
