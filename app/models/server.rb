class Server < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { in: 2..100, message: "Must be between 2 and 100 in length" }

  belongs_to :server_owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_one_attached :photo

  has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  has_many :memberships,
    as: :membership,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user
end