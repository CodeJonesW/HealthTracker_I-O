class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :height, :gender, :age, :weight, :activities, :activity_types, :goals, :follows, :consumptions, :calories_burned, :calories_consumed, :goal_stats, :net_calories, :special, :goal_types


  def activity_types
    {
      runs: self.object.run_activities,
      walks: self.object.walk_activities,
      swims: self.object.swim_activities,
      bikes: self.object.bike_activities,
    }
  end

  def goal_types
    {
      runs: self.object.run_goals,
      walks: self.object.walk_goals,
      swims: self.object.swim_goals,
      bikes: self.object.bike_goals,
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
      calories_burned_per_day_within_last_month: self.object.calories_burned_per_day_within_last_month,
      last_weeks_days: self.object.show_last_weeks_days,
      show_this_months_past_days: self.object.show_this_months_past_days,
      consumptions_within_last_week: self.object.consumptions_within_last_week,
      consumptions_within_last_3_days_per_day: self.object.consumptions_within_last_3_days_per_day,
      activity_miles_this_week: self.object.activity_miles_this_week,
      activity_miles_per_day_this_week: self.object.activity_miles_per_day_this_week,
      activity_miles_this_month: self.object.activity_miles_this_month,
      find_number_of_days_in_current_month: self.object.find_number_of_days_in_current_month,
      find_number_of_days_left_in_current_month: self.object.find_number_of_days_left_in_current_month,
      bmr_at_sedentary_activity_lvl: self.object.bmr_at_sedentary_activity_lvl,
      bmr_at_light_activity_lvl: self.object.bmr_at_light_activity_lvl,
      bmr_at_moderate_activity_lvl: self.object.bmr_at_moderate_activity_lvl,
      bmr_at_high_activity_lvl: self.object.bmr_at_high_activity_lvl,
      bmr_at_very_high_activity_lvl: self.object.bmr_at_very_high_activity_lvl
      }
   end

end
