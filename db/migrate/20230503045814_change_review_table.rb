class ChangeReviewTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :review, :review_details
  end
end
