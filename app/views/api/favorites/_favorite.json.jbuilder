json.extract! favorite, :id, :favoriter_id, :product_id

json.product do 
  json.partial! "api/products/product", product: favorite.product
end