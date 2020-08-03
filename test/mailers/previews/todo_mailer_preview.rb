# Preview all emails at http://localhost:3000/rails/mailers/todo_mailer
class TodoMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/todo_mailer/daily_digest
  def daily_digest
    TodoMailer.daily_digest
  end
end
