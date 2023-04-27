json.products do
  @products.each do |product|
    json.set! product.sku do
      json.partial! 'api/products/product', product: product
    end
  end
end
