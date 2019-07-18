class ConsumptionComment < ApplicationRecord
    belongs_to :user
    belongs_to :consumption
end
