
class CartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, :size, presence: true
  validates :product_id, uniqueness: true

  before_validation :set_default_quantity

  belongs_to :user
  belongs_to :product
  

  private
  def set_default_quantity
    self.quantity ||= 1
  end
end
