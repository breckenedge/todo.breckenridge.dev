require "test_helper"

class TodoMailerTest < ActionMailer::TestCase
  test "daily_digest" do
    user = User.first!
    Todo.create!(id: SecureRandom.uuid, due_on: 1.week.ago, name: "Sample Todo")
    mail = TodoMailer.daily_digest(user: user)
    assert_equal "Todo: Daily Digest", mail.subject
    assert_equal [user.email], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Have a productive day!", mail.body.encoded
  end
end
