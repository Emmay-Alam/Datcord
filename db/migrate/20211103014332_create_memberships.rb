class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.string :membership_type, null: false
      t.integer :membership_id, null: false
      t.timestamps
    end

    add_index :memberships, [:membership_type, :membership_id, :user_id], unique: true, name: "membership_index"
    add_index :memberships, [:membership_type, :membership_id]
    add_index :memberships, :user_id
  end
end
