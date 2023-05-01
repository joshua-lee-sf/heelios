class ReviewsController < ApplicationController
  def index
    user = current_user
    if user
      @favorites = Favorite.where(product_id: user.id)
      render :index
    end
  end

  def create
    @review = Review.new(review_params)
  end

  def update

  end

  def destroy

  end

  private
  def review_params
    params.require(:review).permit(:reviewer_id, :product_id, :title, :rating, :review)
  end
end
