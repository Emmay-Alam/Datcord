class Dm < ApplicationRecord
  has_many :memberships,
    as: :membership,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user
end