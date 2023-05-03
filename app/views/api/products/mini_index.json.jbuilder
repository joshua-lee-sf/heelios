json.products do
  @products.each do |product|
    json.set! product.sku do
      json.partial! 'api/products/product', product: product
    end
  end
end

json.reviews do 
  @products.each do |product|
    product.reviews.each do |review|
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  end
end