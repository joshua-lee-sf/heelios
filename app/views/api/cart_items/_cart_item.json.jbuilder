json.extract! cart_item, :id, :product_id, :user_id, :quantity, :size

json.product do 
  json.partial! "api/products/product", product: cart_item.product
end
