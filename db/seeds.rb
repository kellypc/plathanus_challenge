require "faker"

puts "Cleaning database..."
Property.destroy_all

images_path = Rails.root.join("db", "seeds", "images")
images_files = Dir.children(images_path)

puts "Creating properties..."

50.times do |i|
  property = Property.create!(
    name: Faker::Address.unique.community
  )

  rand(3..5).times do
    file_name = images_files.sample
    file_path = File.join(images_path, file_name)

    property.photos.create!(
      image: Rack::Test::UploadedFile.new(file_path, "image/jpeg")
    )
  end
end

puts "✅ Done! Created #{Property.count} properties with photos"
