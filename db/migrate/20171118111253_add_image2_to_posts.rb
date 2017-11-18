class AddImage2ToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :image2, :string
    add_column :posts, :image3, :string
    add_column :posts, :image4, :string
    add_column :posts, :image5, :string
  end
end
