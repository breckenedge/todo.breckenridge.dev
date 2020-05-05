class AddTimeZoneToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :time_zone, :string, null: false, default: 'Etc/UTC'
  end
end
