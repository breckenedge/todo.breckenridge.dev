class DropAPIKeysFeature < ActiveRecord::Migration[6.1]
  def up
    drop_table :api_keys
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
