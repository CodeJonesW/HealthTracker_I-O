class GoalSerializer < ActiveModel::Serializer
  attributes :id, :user, :category, :distance, :calories_to_burn, :completed
end
