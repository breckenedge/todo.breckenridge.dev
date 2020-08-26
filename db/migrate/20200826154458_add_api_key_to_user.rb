class AddAPIKeyToUser < ActiveRecord::Migration[6.0]
  def change
    add_index :users, :email, unique: true

    create_table :api_keys do |t|
      t.references :user, foreign_key: { on_delete: :cascade }, null: false
      t.string :api_key, null: false
      t.timestamps
    end
  end
end
