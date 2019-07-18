class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.boolean :completed
      t.integer :calories_to_burn
      t.string :distance
      t.string :category

      t.timestamps
    end
  end
end
