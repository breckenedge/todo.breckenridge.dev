class RenameDueOnToDueDate < ActiveRecord::Migration[6.1]
  def change
    rename_column :todos, :due_on, :due_date
  end
end
