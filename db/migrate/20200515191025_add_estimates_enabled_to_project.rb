class AddEstimatesEnabledToProject < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :estimates_enabled, :boolean, default: false, null: false
  end
end
