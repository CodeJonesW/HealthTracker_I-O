class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :password_digest
      t.string :email
      t.integer :age
      t.integer :weight
      t.string :height
      t.string :gender

      t.timestamps
    end
  end
end
