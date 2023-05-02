json.product do
  json.partial! 'api/products/product', product: @product
end