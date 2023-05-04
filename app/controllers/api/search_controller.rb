class Api::SearchController < ApplicationController

  def index
    query = params[:query]
    results = Product.where('name ILIKE ? OR p_type ILIKE ? OR category ILIKE ? OR sku ILIKE ? OR color ILIKE ? OR title ILIKE ?', "%#{query}%","%#{query}%","%#{query}%","%#{query}%","%#{query}%","%#{query}%")
    render json: results
  end
end
