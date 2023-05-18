class ChangeCartItemIndex < ActiveRecord::Migration[7.0]
  def change
    remove_index :cart_items, :product_id
    add_index :cart_items, [:product_id, :size], unique: true
  end
end
