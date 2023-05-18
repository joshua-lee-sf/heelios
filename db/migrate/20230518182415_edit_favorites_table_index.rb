class EditFavoritesTableIndex < ActiveRecord::Migration[7.0]
  def change
    remove_index :favorites, :product_id
    add_index :favorites, [:product_id, :favoriter_id], unique: true
  end
end
