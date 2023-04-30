# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users Seed Data
require 'faker'
require 'uri'
require 'net/http'
require 'openssl'
require 'open-uri'
# require 'aws/s3'

# ApplicationRecord.transaction do 
#   puts "Destroying tables..."
#   # Unnecessary if using `rails db:seed:replant`
#   User.destroy_all

#   puts "Resetting primary keys..."
#   # For easy testing, so that after seeding, the first `User` has `id` of 1
#   ActiveRecord::Base.connection.reset_pk_sequence!('users')

#   puts "Creating users..."
#   # Create one user with an easy to remember username, email, and password:
#   User.create!(
#     email: 'demo@user.io', 
#     password: 'password'
#   )

#   # More users
#   10.times do 
#     User.create!({
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end
#   puts "Done!"
# end

  # puts 'Destroying tables...'
  # Product.destroy_all

  # puts "Resetting primary keys..."
  # ActiveRecord::Base.connection.reset_pk_sequence!('products')

  # puts 'Seeding Products...'

  # products = JSON.load_file "./nikecrawl/shoes.json", symbolize_names: true

  # products.each do |product|
  #   productHash = product.deep_transform_keys { |key| key.to_s.underscore.to_sym }
  #   puts "Creating product: #{product[:name]} (#{product[:sku]})"
  #   productHash[:sku] = productHash[:sku].downcase
  #   product = Product.new(productHash.slice(:name, :title, :description, :color, :p_type, :sku, :category, :size))
  #   product.price = productHash[:price][1..-1].to_f
  #   product.save!
  #   productHash[:images].each_with_index do |image_url, i|
  #     puts "Attaching image: #{product.sku}_#{i}.png"
  #     product.photos.attach(
  #       io: URI.open(image_url), 
  #       filename: "#{product.sku}_#{i}.png"
  #     )
  #   end
  # end

products = Product.all
numbers = (1..10).to_a

# ApplicationRecord.transaction do
#   puts "Destroying tables..."
#   # Unnecessary if using `rails db:seed:replant`
#   CartItem.destroy_all

#   puts "Resetting primary keys..."
#   ActiveRecord::Base.connection.reset_pk_sequence!('cart_items')

#   puts "Creating new carts"

#   20.times do 
#     rand_product = products.sample
#     rand_num = numbers.sample
#     size = JSON.parse(rand_product.size).sample 
#     CartItem.create(product_id: rand_product.id, quantity: rand_num, user_id: 1, size: size)
#   end

#   puts "Done!"

# end

ApplicationRecord.transaction do
  puts "Destroying tables..."
  Favorite.destroy_all

  puts "Resetting Primary keys..."
  ActiveRecord::Base.connection.reset_pk_sequence!('favorites')

  puts "Creating Favorites..."
  20.times do
    rand_product = products.sample
    Favorite.create(product_id: rand_product.id, favoriter_id: 1)
  end

  puts "Done"
end


