class CreateSliders < ActiveRecord::Migration
  def change
    create_table :sliders do |t|
      t.string :name
      t.references :recipe, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
