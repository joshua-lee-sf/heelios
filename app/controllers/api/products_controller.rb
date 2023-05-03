class Api::ProductsController < ApplicationController
  include ActiveStorage::SetCurrent

  def index
    if params[:sku]
      @products = Product.where("sku LIKE ?", params[:sku].split("-")[0].concat("%")).includes(:reviews)
      render :mini_index
    else
      @products = Product.all
      render :index
    end
  end

  def show
    @product = Product.find_by(sku: params[:id])
    render :show
  end

end
