class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.boolean :video
      t.string :video_link
      t.string :yield
      t.string :servings
      t.string :preparation_time
      t.string :cook_time
      t.string :ready_in


      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
