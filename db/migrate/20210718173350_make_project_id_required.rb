class MakeProjectIdRequired < ActiveRecord::Migration[6.1]
  def up
    execute("DELETE FROM todos WHERE project_id IS NULL")
    change_column :todos, :project_id, :string, null: false
  end

  def down
    change_column :todos, :project_id, :string, null: true
  end
end
