json.extract! review, :id, :product_id, :reviewer_id, :title, :rating, :review, :created_at, :updated_at

json.product do 
  json.partial! "api/products/product", product: review.product
end
