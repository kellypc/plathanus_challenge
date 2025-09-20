FactoryBot.define do
  factory :property do
    name { Faker::Address.street_name }

    trait :with_photos do
      transient do
        photos_count { 3 }
      end

      after(:create) do |property, evaluator|
        create_list(:photo, evaluator.photos_count, property: property)
      end
    end
  end
end
