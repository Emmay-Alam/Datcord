class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.date :dob, null: false
      t.integer :tag, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
