class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :reviewer, null: false, foreign_key: {to_table: :users}
      t.references :product, null: false, foreign_key: true, index: false
      t.string :title, null: false
      t.integer :rating, null: false
      t.text :review, 
      t.timestamps
    end
    add_index :reviews, [:reviewer_id, :product_id], unique: true
  end
end
