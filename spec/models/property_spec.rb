require 'rails_helper'

RSpec.describe Property, type: :model do
  describe "associations" do
    it { should have_many(:photos).dependent(:destroy) }
  end

  describe "validations" do
    it { should validate_presence_of(:name) }
  end

  describe "#cover_photo" do
    let(:property) { create(:property, :with_photos, photos_count: 4) }

    it "returns the third photo as cover" do
      expect(property.cover_photo).to eq(property.photos[2])
    end

    it "returns nil if there are less than three photos" do
      property_with_two_photos = create(:property, :with_photos, photos_count: 2)
      expect(property_with_two_photos.cover_photo).to be_nil
    end
  end
end
