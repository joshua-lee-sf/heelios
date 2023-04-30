class EditCartItemsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :size, :string, null: false
  end
end
