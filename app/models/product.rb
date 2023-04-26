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
#
PRODUCT_CATEGORY = ['men', 'women', 'kids']
class Product < ApplicationRecord
  validates :name, :p_type, :color, :description, :price, presence: true
  validates :sku, presence: true, uniqueness: true
  validates :category, presence: true, inclusion: {in: PRODUCT_CATEGORY}

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

