json.set! @product.id do
  json.extract! @product, :id, :category, :color, :description, :name, :price, :sku, :p_type
end