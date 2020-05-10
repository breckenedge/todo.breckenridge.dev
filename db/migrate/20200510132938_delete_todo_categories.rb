class DeleteTodoCategories < ActiveRecord::Migration[6.0]
  def up
    drop_table :todo_category_todos
    drop_table :todo_categories
  end

  def down
    raise ActiveRecord::IrreversibleMigrationError
  end
end
