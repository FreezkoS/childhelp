class AddImageToPosthhs < ActiveRecord::Migration[5.1]
  def change
    add_column :posthhs, :image, :string
  end
end
