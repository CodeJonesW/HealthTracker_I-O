class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :user, :category, :distance, :calories_burned
end
