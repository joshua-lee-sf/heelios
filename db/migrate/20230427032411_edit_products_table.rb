class EditProductsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :size, :string, null: false
  end
end
