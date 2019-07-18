class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :user_id
      t.string :category
      t.integer :calories_burned
      t.string :distance
      
      t.timestamps
    end
  end
end
