class Posthh < ApplicationRecord
    mount_uploader :image, ImageUploader
    validates :title, :summary, :body, presence: true
    paginates_per 5
end
