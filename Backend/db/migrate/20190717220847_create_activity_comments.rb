class CreateActivityComments < ActiveRecord::Migration[5.2]
  def change
    create_table :activity_comments do |t|
      t.integer :user_id
      t.integer :activity_id
      t.string :content
      
      t.timestamps
    end
  end
end
