class Api::CartItemsController < ApplicationController
  def index
    @user = current_user
    if @user
      @cart_items = CartItem.where(user_id: @user.id)
      render :index
    else
      render json: {cart_item: nil}
    end
  end

  def create
    @cart_item = CartItem.new(cart_items_params)
    
    if @cart_item.save
      render :index
    else
      render json: @cart_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.update
      render :index
    else
      render json: @cart_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.destroy
      render :index
    else
      render json: @cart_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def cart_items_params
    params.require(:params).permit(:product_id, :user_id, :quantity)
  end
end
