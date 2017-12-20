class Post < ApplicationRecord
    mount_uploader :image, ImageUploader
    mount_uploader :image2, ImageUploader
    validates :title, :summary, :body, presence: true
    paginates_per 5
end
