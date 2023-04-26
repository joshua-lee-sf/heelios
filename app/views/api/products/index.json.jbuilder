json.products do
  @products.each do |product|
    json.set! product.id do
      json.extract! product, :name, :price, :p_type, :color, :description, :category, :title, product.photos.url
    end
  end
end
