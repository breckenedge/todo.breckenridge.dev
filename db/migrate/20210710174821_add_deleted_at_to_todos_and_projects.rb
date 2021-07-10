class AddDeletedAtToTodosAndProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :todos, :deleted_at, :timestamp
    add_column :projects, :deleted_at, :timestamp
  end
end
