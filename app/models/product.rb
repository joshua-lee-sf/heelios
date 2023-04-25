# == Schema Information
#
# Table name: products
#
#  id                  :bigint           not null, primary key
#  product_name        :string           not null
#  product_sku         :string           not null
#  product_type        :string           not null
#  product_color       :string           not null
#  product_description :text             not null
#  product_category    :string           not null
#  product_price       :float            not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
PRODUCT_CATEGORY = ['men', 'women', 'kids']
class Product < ApplicationRecord
  validates :product_name, :product_type, :product_color, :product_description, :product_price, presence: true
  validates :product_sku, presence: true, uniqueness: true
  validates :product_category, presence: true, inclusion: {in: PRODUCT_CATEGORY}

  has_many_attached :photos
end

# p = Product.create({
#   product_name: "",
#   product_sku: '',
#   product_type: "Kid's Apparel",
#   product_color: '',
#   product_description: "",
#   product_category: 'kids',
#   product_price: 
# })

