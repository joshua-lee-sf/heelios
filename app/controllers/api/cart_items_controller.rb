class Api::CartItemsController < ApplicationController
  include ActiveStorage::SetCurrent
  wrap_parameters include: CartItem.attribute_names + [:productId, :userId]

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
      render :show
    else
      render json: @cart_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])
    
    if @cart_item.update(cart_items_params)
      render :show
    else
      render json: @cart_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    
    if @cart_item&.destroy
      render :show
    end
  end

  private
  def cart_items_params
    params.require(:cart_item).permit(:product_id, :user_id, :quantity, :size)
  end
end
