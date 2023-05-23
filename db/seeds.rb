# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# Users Seed Data
require 'faker'
require 'uri'
require 'net/http'
require 'openssl'
require 'open-uri'
# # require 'aws/s3'



  puts 'Destroying tables...'

  CartItem.destroy_all
  puts "Destroyed Cart Items table"
  Favorite.destroy_all
  puts "Destroyed Favorites table"
  Review.destroy_all
  puts "Destroyed Reviews table"
  Product.destroy_all
  puts "products destroyed"
  # User.destroy_all
  # puts "Destroyed Users table"

  puts "Resetting primary keys..."
  ActiveRecord::Base.connection.reset_pk_sequence!('products')
  puts "Reset products primary keys"
  # ActiveRecord::Base.connection.reset_pk_sequence!('users')
  # puts "Reset users primary keys"
  ActiveRecord::Base.connection.reset_pk_sequence!('cart_items')
  puts "Reset cart items primary keys"
  ActiveRecord::Base.connection.reset_pk_sequence!('favorites')
  puts "Reset favorites primary keys"
  ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
  puts "Reset reviews primary keys"
  

  # puts "Seeding users..."
  # # Create one user with an easy to remember username, email, and password:
  # User.create!(
  #   email: 'demo@user.io', 
  #   password: 'password'
  # )

  # # More users
  # 10.times do 
  #   User.create!({
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

  puts 'Seeding Products...'

  products = JSON.load_file "./nikecrawl/shoes.json", symbolize_names: true

  products.each do |product|
    productHash = product.deep_transform_keys { |key| key.to_s.underscore.to_sym }
    puts "Creating product: #{product[:name]} (#{product[:sku]})"
    productHash[:sku] = productHash[:sku].downcase
    product = Product.new(productHash.slice(:name, :title, :description, :color, :p_type, :sku, :category, :size))
    product.price = productHash[:price][1..-1].to_f
    product.save!
    productHash[:images].each_with_index do |image_url, i|
      begin
        puts "Attaching image: #{product.sku}_#{i}.png"
        product.photos.attach(
          io: URI.open(image_url, read_timeout: 2000), 
          filename: "#{product.sku}_#{i}.png"
        )
      rescue
        puts "failed to attach image #{image_url}"
      end
    end
  end

  puts "Products Seeded"

  products = Product.all
  numbers = (1..10).to_a

  puts "Seeding Carts..."
  20.times do 
    rand_product = products.sample
    rand_num = numbers.sample
    size = JSON.parse(rand_product.size).sample 
    CartItem.create(product_id: rand_product.id, quantity: rand_num, user_id: 1, size: size)
  end

  puts "Carts seeded"

  puts "Creating Favorites..."
  20.times do
    rand_product = products.sample
    Favorite.create(product_id: rand_product.id, favoriter_id: 1)
  end

  puts "Favorites seeded"

  puts "Creating Reviews..."
  5.times do
    rand_product = products.sample
    rand_title = Faker::Lorem.sentence
    rand_rating = [1,2,3,4,5].sample
    rand_review = Faker::Lorem.paragraph
    Review.create(
      product_id: rand_product.id, 
      reviewer_id: 1,
      title: rand_title,
      rating: rand_rating,
      review_details: rand_review
    )
  end

  30.times do
    rand_product = products.sample
    rand_title = Faker::Lorem.sentence
    rand_rating = [1,2,3,4,5].sample
    rand_review = Faker::Lorem.paragraph
    Review.create(
      product_id: rand_product.id, 
      reviewer_id: numbers.sample,
      title: rand_title,
      rating: rand_rating,
      review_details: rand_review
    )
  end  

  puts "Reviews seeded!"

  puts "Done!"

  
