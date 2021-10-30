class User < ApplicationRecord

  after_initialize :ensure_session_token

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

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
    self.password.digest = BCrypt::Password.create(password)
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
end