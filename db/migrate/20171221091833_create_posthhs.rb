class CreatePosthhs < ActiveRecord::Migration[5.1]
  def change
    create_table :posthhs do |t|
      t.string :title
      t.text :summary
      t.text :body

      t.timestamps
    end
  end
end
