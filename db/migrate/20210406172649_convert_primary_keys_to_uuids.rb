class ConvertPrimaryKeysToUuids < ActiveRecord::Migration[6.1]
  def up
    remove_foreign_key "todo_status_changes", "todos"
    remove_foreign_key "todos", "projects"

    change_column :projects, :id, :string, null: false, unique: true
    change_column :users, :id, :string, null: false, unique: true
    change_column :todos, :id, :string, null: false, unique: true
    change_column :todo_status_changes, :id, :string, null: false, unique: true

    change_column :todos, :project_id, :string
    change_column :todo_status_changes, :todo_id, :string, null: false

    TodoStatusChange.find_each do |rec|
      rec.update(id: SecureRandom.uuid)
    end

    Todo.find_each do |rec|
      new_id = SecureRandom.uuid
      TodoStatusChange.where(todo_id: rec.id).update_all(todo_id: new_id)
      rec.update(id: new_id)
    end

    Project.find_each do |rec|
      new_id = SecureRandom.uuid
      Todo.where(project_id: rec.id).update_all(project_id: new_id)
      rec.update(id: new_id)
    end

    add_foreign_key "todo_status_changes", "todos", on_delete: :cascade
    add_foreign_key "todos", "projects"
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
