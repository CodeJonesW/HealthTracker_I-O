class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :height, :gender, :age, :weight, :activities, :goals, :follows, :consumptions
end
