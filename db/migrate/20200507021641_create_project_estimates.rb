class CreateProjectEstimates < ActiveRecord::Migration[6.0]
  def change
    create_table :project_estimates do |t|
      t.references :project, null: false, foreign_key: true
      t.date :date
      t.string :vendor
      t.string :contact
      t.string :phone
      t.string :estimate
      t.text :details

      t.timestamps
    end
  end
end
