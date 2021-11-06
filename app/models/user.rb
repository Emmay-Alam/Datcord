class User < ApplicationRecord

  after_initialize :ensure_session_token

  validates :username, length: { in: 2..32, message: "Must be between 2 and 32 in length" }
  validates :username, uniqueness: { scope: :tag, message: "Too many users with this username"}
  validates :email, presence: true, uniqueness: { message: "Email is already registered" }
  validates :dob, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true, message: "Must be 6 or more in length" }
  validates :session_token, presence: true, uniqueness: true

  has_many :owned_servers,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Server

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Membership

  has_many :servers,
    through: :memberships,
    source: :member_of,
    source_type: :Server

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user && user.is_password?(password)) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  attr_reader :password

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def generate_tag
    tag = rand(1..9999)
    tag = rand(1..9999) while User.exists?(username: self.username, tag: tag)
    tag
  end

  def ensure_tag
    self.tag ||= self.generate_tag
  end
end