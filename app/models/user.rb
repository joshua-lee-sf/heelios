# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }, length: {in: 3..255}
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true
  validates :password, length: {in: 3..255}, allow_nil: true
  before_validation :ensure_session_token

  has_many :carted_items,
    foreign_key: :user_id,
    class_name: :CartItem,
    dependent: :destroy

  has_many :favorites,
    foreign_key: :favoriter_id,
    class_name: :Favorite,
    dependent: :destroy

  has_many :reviews,
    foreign_key: :reviewer_id,
    class_name: :Review,
    dependent: :destroy

  def self.find_by_credentials(email, password)

    @user = User.find_by(email: email)

    if @user && @user.authenticate(password)
      return @user
    else
      return nil
    end
    
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    return self.session_token
  end

  private
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
