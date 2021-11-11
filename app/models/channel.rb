class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server
end