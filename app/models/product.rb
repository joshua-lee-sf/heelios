# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  sku         :string           not null
#  p_type      :string           not null
#  color       :string           not null
#  description :text             not null
#  category    :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#  sale_price  :float
#  size        :string           not null
#
PRODUCT_CATEGORY = ['men', 'women', 'kids']
class Product < ApplicationRecord
  validates :name, :p_type, :color, :description, :price, :size, presence: true
  validates :sku, presence: true, uniqueness: true
  validates :category, presence: true, inclusion: {in: PRODUCT_CATEGORY}

  has_many_attached :photos
  
  has_many :cart_items,
    foreign_key: :product_id,
    class_name: :Product

  has_many :favorites,
    foreign_key: :product_id,
    class_name: :Favorite

  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review
end


