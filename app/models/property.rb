class Property < ApplicationRecord
  has_many :photos, dependent: :destroy

  validates :name, presence: true

  def cover_photo
    photos.to_a[2]
  end
end
