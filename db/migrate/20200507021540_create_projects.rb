class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.date :due_date
      t.integer :status, default: 0
      t.text :details

      t.timestamps
    end
  end
end
