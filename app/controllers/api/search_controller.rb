class Api::SearchController < ApplicationController
  include ActiveStorage::SetCurrent

  def index
    query = params[:query]
    @products = Product.where('name ILIKE ? OR p_type ILIKE ? OR category ILIKE ? OR sku ILIKE ? OR color ILIKE ? OR title ILIKE ? OR description ILIKE ?', "%#{query}%", "%#{query}%","%#{query}%","%#{query}%","%#{query}%","%#{query}%","%#{query}%")
    render 'api/products/index'
  end
end
