json.extract! product, :id, :name, :title, :sku, :p_type, :color, :description, :category, :price, :sale_price

json.size JSON.parse(product.size)

photos_url = []
product.photos.each do |photo|
  photos_url << photo.url
end
json.image_url photos_url
