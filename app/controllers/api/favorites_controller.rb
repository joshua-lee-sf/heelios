class Api::FavoritesController < ApplicationController
  include ActiveStorage::SetCurrent

  def index
    @user = current_user

    if @user
      @favorites = Favorite.where(favoriter_id: @user.id)
      render :index
    end
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite
      @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])

    if @favorite&.destroy
      render :show
    else
      render json: @favorite.errors.full_messages, status: :unprocessable_entity
    end
  end


  private
  def favorite_params
    params.require(:favorite).permit(:favoriter_id, :product_id)
  end
end
