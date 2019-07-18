class Consumption < ApplicationRecord
    belongs_to :user
    has_many :consumption_comments
end
