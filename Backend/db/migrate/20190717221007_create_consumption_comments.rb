class CreateConsumptionComments < ActiveRecord::Migration[5.2]
  def change
    create_table :consumption_comments do |t|
      t.integer :user_id
      t.integer :consumption_id
      t.string :content
      
      t.timestamps
    end
  end
end
