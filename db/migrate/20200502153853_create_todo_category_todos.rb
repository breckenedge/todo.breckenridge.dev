class CreateTodoCategoryTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todo_category_todos do |t|
      t.references :todo, null: false, foreign_key: true
      t.references :todo_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
