class DropEstimatesFeature < ActiveRecord::Migration[6.1]
  def up
    drop_table :estimates
    remove_column :projects, :estimates_enabled
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
