require 'rails_helper'

RSpec.describe Photo, type: :model do
  describe "associations" do
    it { should belong_to(:property) }
  end

  describe "validations" do
    it "is invalid without an attached image" do
      photo = build(:photo)
      photo.image.detach
      expect(photo).not_to be_valid
      expect(photo.errors[:image]).to include("can't be blank")
    end

    it "is valid with an attached image" do
      photo = build(:photo)
      expect(photo).to be_valid
    end
  end
end
