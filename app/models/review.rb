# == Schema Information
#
# Table name: reviews
#
#  id                                                              :bigint           not null, primary key
#  reviewer_id                                                     :bigint           not null
#  product_id                                                      :bigint           not null
#  title                                                           :string           not null
#  rating                                                          :integer          not null
#  created_at                                                      :datetime         not null
#  updated_at                                                      :datetime         not null
#  review                                                          :text
#  #<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition :text
#
class Review < ApplicationRecord
  validates :reveiwer_id, :product_id, :title, :rating, :rating, null: false

  belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
