class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :height, :gender, :age, :weight, :activities, :activity_types, :goals, :follows, :consumptions, :calories_burned, :calories_consumed, :goal_stats, :net_calories, :special


  def activity_types
    {
      runs: self.object.run_activities,
      walks: self.object.walk_activities,
      swims: self.object.swim_activities,
      bikes: self.object.bike_activities,
    }
  end

  def calories_burned
    {
    daily: self.object.daily_calories_burned,
    weekly: self.object.weekly_calories_burned,
    monthly: self.object.monthly_calories_burned,
    yearly: self.object.yearly_calories_burned
    }
  end

  def calories_consumed
    {
      daily: self.object.daily_calories_consumed,
      weekly: self.object.weekly_calories_consumed,
      monthly: self.object.monthly_calories_consumed,
      yearly: self.object.yearly_calories_consumed
    }
  end

  def goal_stats
    {
      successful_goals: self.object.successful_goals,
      pending_goals: self.object.goals_to_complete
    }
  end

  def net_calories
    {
      daily: self.object.net_daily_calories,
      weekly: self.object.net_weekly_calories,
      monthly: self.object.net_monthly_calories,
      yearly: self.object.net_yearly_calories
    }
   end

   def special
    {
      basal_metabolic_rate: self.object.basal_metabolic_rate,
      calories_consumed: self.object.calories_consumed_per_day_within_last_week,
      calories_burned: self.object.calories_burned_per_day_within_last_week,
      last_weeks_days: self.object.show_last_weeks_days
    }
   end
end
