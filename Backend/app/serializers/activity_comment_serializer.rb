class ActivityCommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :activity, :user
end
