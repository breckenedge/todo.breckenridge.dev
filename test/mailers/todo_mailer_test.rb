require "test_helper"

class TodoMailerTest < ActionMailer::TestCase
  test "daily_digest" do
    project = Project.create!(name: "test", id: SecureRandom.uuid)
    user = User.first!
    Todo.create!(project_id: project.id, id: SecureRandom.uuid, due_date: 1.week.ago, name: "Sample Todo")
    mail = TodoMailer.daily_digest(user:)
    assert_equal "Todo: Daily Digest", mail.subject
    assert_equal [user.email], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Have a productive day!", mail.body.encoded
  end
end
