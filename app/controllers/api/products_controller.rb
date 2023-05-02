class Api::ProductsController < ApplicationController
  include ActiveStorage::SetCurrent

  def index
    if params[:sku]
      @products = Product.where("sku LIKE ?", params[:sku].split("-")[0].concat("%"))
    else
      @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.find_by(sku: params[:id])
    render :show
  end

end
