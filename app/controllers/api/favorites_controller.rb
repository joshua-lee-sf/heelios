class Api::FavoritesController < ApplicationController
  include ActiveStorage::SetCurrent
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @user = current_user

    if @user
      @favorites = Favorite.where(favoriter_id: @user.id)
      render :index
    end
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite&.save
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
