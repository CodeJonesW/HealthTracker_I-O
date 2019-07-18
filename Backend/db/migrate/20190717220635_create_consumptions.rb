class CreateConsumptions < ActiveRecord::Migration[5.2]
  def change
    create_table :consumptions do |t|
      t.integer :user_id
      t.string :category
      t.integer :calories_intaken

      t.timestamps
    end
  end
end
