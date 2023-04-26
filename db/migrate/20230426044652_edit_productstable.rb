class EditProductstable < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :title, :string,  null: true
    rename_column :products, :product_name, :name
    rename_column :products, :product_sku, :sku
    rename_column :products, :product_type, :type
    rename_column :products, :product_color, :color
    rename_column :products, :product_description, :description
    rename_column :products, :product_category, :category
    rename_column :products, :product_price, :price
  end
end
