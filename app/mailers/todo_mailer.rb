class TodoMailer < ApplicationMailer
  def daily_digest(user: User.first)
    @user = user
    @todos = Todo.where(due_on: Date.current)
    @late_todos = Todo.late

    mail(to: @user.email, subject: "Todo: Daily Digest")
  end

  def weekly_summary(user: User.first)
    @user = user
    @todos = Todo.completed_last_week

    mail(to: @user.email, subject: "Todo: Weekly Summary")
  end
end
