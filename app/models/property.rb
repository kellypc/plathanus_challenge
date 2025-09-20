class Property < ApplicationRecord
  has_many :photos, dependent: :destroy

  validates :name, presence: true

  def cover_photo
    return nil if photos.size < 3
    photos[2].image if photos[2].image.attached?
  end
end
