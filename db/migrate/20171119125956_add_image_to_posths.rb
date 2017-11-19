class AddImageToPosths < ActiveRecord::Migration[5.1]
  def change
    add_column :posths, :image, :string
    add_column :posths, :image2, :string
  end
end
