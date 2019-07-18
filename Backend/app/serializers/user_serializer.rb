class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :height, :gender, :age, :weight
end
