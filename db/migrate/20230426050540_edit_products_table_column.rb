class EditProductsTableColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :products, :type, :p_type
  end
end
