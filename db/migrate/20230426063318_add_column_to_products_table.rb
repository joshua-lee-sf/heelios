class AddColumnToProductsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :sale_price, :float
  end
end
