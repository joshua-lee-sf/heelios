class Api::ReviewsController < ApplicationController
  include ActiveStorage::SetCurrent

  def index
    @reviews = Review.where(product_id: params[:product_id])
    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_message, status: :unprocessable_entity
    end
  end

  def update
    user = current_user
    @review = Review.find_by(id: params[:id])

    if user.id == @review.reviewer_id
      @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_message, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review && @reviewer.reviewer_id == user.id
      if @review.destroy
        render :show
      else
        render json: @favorite.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  private
  def review_params
    params.require(:review).permit(:reviewer_id, :product_id, :title, :rating, :review)
  end
end
