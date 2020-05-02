class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.text :description
      t.date :due_on
      t.integer :priority
      t.integer :status

      t.timestamps
    end
  end
end
