class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :favoriter, null: false, foreign_key: {to_table: :users}
      t.references :product, null: false, foreign_key: true
      t.timestamps
    end
  end
end
