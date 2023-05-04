# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  user_id    :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  size       :string           not null
#
class CartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, :size, presence: true
  validates :product_id, uniqueness: {message: "already in cart"} 

  before_validation :set_default_quantity

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
  

  private
  def set_default_quantity
    self.quantity ||= 1
  end
end
