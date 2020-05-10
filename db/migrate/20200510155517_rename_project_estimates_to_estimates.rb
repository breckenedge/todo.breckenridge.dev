class RenameProjectEstimatesToEstimates < ActiveRecord::Migration[6.0]
  def change
    rename_table :project_estimates, :estimates
  end
end
