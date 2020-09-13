class CreateTodoStatusChanges < ActiveRecord::Migration[6.0]
  def change
    create_table :todo_status_changes do |t|
      t.references :todo, null: false, foreign_key: { on_delete: :cascade }
      t.integer :status, null: false

      t.timestamps
    end
  end
end
