class Project < ApplicationRecord
  has_many :estimates, dependent: :destroy
  has_many :todos, dependent: :destroy

  validates :name, presence: true

  enum status: { incomplete: 0, complete: 1 }

  def percent_complete
    return "" unless todos.any?

    percent = (todos.complete.count.to_f / todos.count * 100).round(1)
    "#{percent}%"
  end

  def as_json(**options)
    super.merge(:percent_complete => percent_complete)
  end
end
