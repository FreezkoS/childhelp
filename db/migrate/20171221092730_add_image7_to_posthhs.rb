class AddImage7ToPosthhs < ActiveRecord::Migration[5.1]
  def change
    add_column :posthhs, :image7, :string
  end
end
