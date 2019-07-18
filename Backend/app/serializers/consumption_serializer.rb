class ConsumptionSerializer < ActiveModel::Serializer
  attributes :id, :user, :category, :calories_intaken
end
