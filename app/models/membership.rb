<<<<<<< HEAD
class Membership < ApplicationRecord
  belongs_to :member_of, polymorphic: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :user
=======
class Membership < ApplicationRecord
  belongs_to :membership, polymorphic: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
>>>>>>> channel
end