class AddProjectIdToTodos < ActiveRecord::Migration[6.0]
  def change
    add_reference :todos, :project, null: true, foreign_key: true
  end
end
