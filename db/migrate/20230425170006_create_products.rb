class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.string :product_sku, null: false, index: {unique: true}
      t.string :product_type, null: false
      t.string :product_color, null: false
      t.text :product_description, null: false
      t.string :product_category, null: false
      t.float :product_price, null: false
      t.timestamps
    end
  end
end
