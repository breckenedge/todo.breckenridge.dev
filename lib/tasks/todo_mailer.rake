namespace :todo_mailer do
  task deliver_digest: :environment do
    User.find_each do |user|
      TodoMailer.daily_digest(user).deliver
    end
  end
end
