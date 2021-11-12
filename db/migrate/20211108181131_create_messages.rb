class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.string :messaged_type, null: false
      t.integer :messaged_id, null: false
      t.timestamps
    end

    add_index :messages, [:messaged_type, :messaged_id, :user_id], name: "message_index"
    add_index :messages, [:messaged_type, :messaged_id]
    add_index :messages, [:user_id]
  end
end
