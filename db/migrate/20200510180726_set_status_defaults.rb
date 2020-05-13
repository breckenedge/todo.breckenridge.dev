class SetStatusDefaults < ActiveRecord::Migration[6.0]
  def up
    execute("UPDATE todos SET status = 0 WHERE status IS NULL")
    change_column :todos, :status, :integer, default: 0, null: false

    execute("UPDATE projects SET status = 0 WHERE status IS NULL")
    change_column :projects, :status, :integer, default: 0, null: false
  end

  def down
    change_column :todos, :status, :integer, default: nil, null: true
    change_column :projects, :status, :integer, default: nil, null: true
  end
end
