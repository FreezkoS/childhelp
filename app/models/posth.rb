class Posth < ApplicationRecord
    mount_uploader :image, ImageUploader
    mount_uploader :image2, ImageUploader
    validates :title, :summary, :body, presence: true
end
