# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  favoriter_id :bigint           not null
#  product_id   :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
  validates :favoriter_id, :product_id, presence: true
  validates :product_id, uniqueness: true

  belongs_to :favoriter,
    foreign_key: :favoriter_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
