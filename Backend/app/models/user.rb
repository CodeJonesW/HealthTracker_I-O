class User < ApplicationRecord
    has_secure_password


    validates :email, :password, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 3 }

    has_many :goals
    has_many :activities
    has_many :consumptions
    has_many :activity_comments
    has_many :consumption_comments

    has_many :follows
    has_many :followed_users, through: :follows
  
    has_many :followers, foreign_key: :followed_user_id, class_name: 'Follow'
    has_many :follower_users, through: :followers, source: :user

    # activity totals

    def total_weekly_activities
        self.activities.select do |activity|
            activity.created_at.strftime('%U') == Time.now.strftime('%U') && activity.created_at.year == Time.now.year
        end
    end


    def total_monthly_activities
        self.activities.select do |activity|
            activity.created_at.month == Time.now.month && activity.created_at.year == Time.now.year
        end
    end

    def total_yearly_activities
        self.activities.select do |activity|
            activity.created_at.year == Time.now.year
        end
    end


    # activity types

    def run_activities
        self.activities.select { |activity| activity.category == "run" }
    end

    def walk_activities
        self.activities.select { |activity| activity.category == "walk" }
    end

    def swim_activities
        self.activities.select { |activity| activity.category == "swim" }
    end

    def bike_activities
        self.activities.select { |activity| activity.category == "bike" }
    end


    # goal types

    def run_goals
        self.goals.select { |goal| goal.category == "run" }
    end

    def walk_goals
        self.goals.select { |goal| goal.category == "walk" }
    end

    def swim_goals
        self.goals.select { |goal| goal.category == "swim" }
    end

    def bike_goals
        self.goals.select { |goal| goal.category == "bike" }
    end

    # calories burned

    def daily_calories_burned
        daily_calories_burned = 0
        self.activities.each do |activity|
            if (activity.created_at.today?)
                daily_calories_burned += activity.calories_burned 
            end
        end
        return daily_calories_burned
    end


    def weekly_calories_burned
        weekly_calories_burned = 0
          self.activities.each do |activity|
            if (activity.created_at.strftime('%U') == Time.now.strftime('%U') && activity.created_at.year == Time.now.year)
                weekly_calories_burned += activity.calories_burned 
            end
        end
        return weekly_calories_burned
    end


    def monthly_calories_burned
        monthly_calories_burned = 0
          self.activities.each do |activity|
            if (activity.created_at.month === Time.now.month && activity.created_at.year == Time.now.year)
                monthly_calories_burned += activity.calories_burned 
            end
        end
        return monthly_calories_burned
    end

    def yearly_calories_burned
        yearly_calories_burned = 0
          self.activities.each do |activity|
            if (activity.created_at.year === Time.now.year)
                yearly_calories_burned += activity.calories_burned 
            end
        end
        return yearly_calories_burned
    end

    # calories consumed

    def daily_calories_consumed
        daily_total_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.today?)
                daily_total_calories_intaken += consumption.calories_intaken 
            end
        end
        return daily_total_calories_intaken
    end


    def weekly_calories_consumed
        weekly_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.strftime('%U') == Time.now.strftime('%U') && consumption.created_at.year == Time.now.year)
                weekly_calories_intaken += consumption.calories_intaken 
            end
        end
        return weekly_calories_intaken
    end

    def monthly_calories_consumed
        monthly_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.month === Time.now.month && consumption.created_at.year == Time.now.year)
                monthly_calories_intaken += consumption.calories_intaken 
            end
        end
        return monthly_calories_intaken
    end

    def yearly_calories_consumed
        yearly_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.year === Time.now.year)
                yearly_calories_intaken += consumption.calories_intaken 
            end
        end
        return yearly_calories_intaken
    end

    # goal statistics

    def successful_goals
        self.goals.select {|goal| goal.completed == true }
    end

    def goals_to_complete
        self.goals.select { |goal| goal.completed == false }
    end

    # net calorie counting

    def net_daily_calories
        return self.daily_calories_consumed - self.daily_calories_burned
    end

    def net_weekly_calories
        return self.weekly_calories_consumed - self.weekly_calories_burned
    end

    def net_monthly_calories
        return self.monthly_calories_consumed - self.monthly_calories_burned
    end

    def net_yearly_calories
        return self.yearly_calories_consumed - self.yearly_calories_burned
    end

    #base metabolic rate
    # what user needs to have for basic function
    # Harris–Benedict equation

    def basal_metabolic_rate
        self.gender == "male" ? 66.7 + ( 6.24 * (self.weight) ) + ( 12.7 * (self.height).to_f ) - ( 6.755 * self.age) : 655.1 + ( 4.35 * (self.weight) ) + ( 4.7 * (self.height).to_f ) - ( 4.7 * self.age)
    end

    def bmr_at_sedentary_activity_lvl
        self.basal_metabolic_rate * 1.2
    end

    def bmr_at_light_activity_lvl
        self.basal_metabolic_rate * 1.375
    end

    def bmr_at_moderate_activity_lvl
        self.basal_metabolic_rate * 1.55
    end

    def bmr_at_high_activity_lvl
        self.basal_metabolic_rate * 1.725
    end

    def bmr_at_very_high_activity_lvl
        self.basal_metabolic_rate * 1.9
    end


    def day_of_choice_calories_burned(day)
        daily_calories_burned = 0
        self.activities.each do |activity|
            if (activity.created_at.strftime('%F') == day.strftime('%F'))
                daily_calories_burned += activity.calories_burned
                 
            end
        end
        return daily_calories_burned
    end

    def day_of_choice_calories_consumed(day)
        daily_calories_consumed = 0
        self.consumptions.each do |consumption|
            if (consumption.created_at.strftime('%F') == day.strftime('%F'))
                daily_calories_consumed += consumption.calories_intaken
                 
            end
        end
        return daily_calories_consumed
    end

    # Could be refactored 
    def show_last_weeks_days
        days = []
        calories_burned = []
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today
        return days
    end

    def show_this_months_past_days
        days = []
        days_passed_in_month = Date.today.strftime('%F').split('-')[2].to_i
        (0..days_passed_in_month-1).each { |i| days << Date.today-i}
        return days
    end
    # Could be refactored 
    def calories_burned_per_day_within_last_week
        days = []
        calories_burned = []
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today

        days.each do |day|
            calories_burned << day_of_choice_calories_burned(day)
        end
        return calories_burned
    end

    def calories_burned_per_day_within_last_month
        calories_burned = []
        days = []
        days_passed_in_month = Date.today.strftime('%F').split('-')[2].to_i
        (0..days_passed_in_month-1).each { |i| days << Date.today-i}
        days.each do |day|
            calories_burned << day_of_choice_calories_burned(day)
        end
        return calories_burned
    end

    # Could be refactored 
    def calories_consumed_per_day_within_last_week
        days = []
        calories_consumed = []
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today

        days.each do |day|
            calories_consumed << day_of_choice_calories_consumed(day)
        end
        return calories_consumed
    end

    def day_of_choice_consumptions(day)
        consumed = []
        self.consumptions.each do |consumption|
            if (consumption.created_at.strftime('%F') == day.strftime('%F'))
                consumed << consumption
                 
            end
        end
        return consumed
    end

    # Could be refactored 
    def consumptions_within_last_week
        days = []
        consumed = []
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today

        days.each do |day|
            consumed << day_of_choice_consumptions(day)
        end
        return consumed
    end

    # Could be refactored 
    def consumptions_within_last_3_days_per_day
        days = []
        consumed = []
        days << Date.today-2
        days << Date.today-1
        days << Date.today
        days.each do |day|
            consumed << day_of_choice_consumptions(day)
        end
        return consumed
    end


    def day_of_choice_activity_miles(day)
        miles = 0
        self.activities.each do |activity|
            if (activity.created_at.strftime('%F') == day.strftime('%F'))
                miles += activity.distance.split(" ")[0].to_f
                 
            end
        end
        return miles
    end

    # Could be refactored 
    def activity_miles_this_week
        days = []
        miles = 0
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today

        days.each do |day|
            miles += day_of_choice_activity_miles(day)
        end
        return miles
    end

    # Could be refactored 
    def activity_miles_per_day_this_week
        days = []
        day_miles = []
        days << Date.today-6
        days << Date.today-5
        days << Date.today-4
        days << Date.today-3
        days << Date.today-2
        days << Date.today-1
        days << Date.today

        days.each do |day|
            day_miles << day_of_choice_activity_miles(day)
        end
        return day_miles
    end

    def find_number_of_days_in_current_month
        days_in_month = Time.days_in_month(Date.today.strftime('%F').split('-')[1].to_i, Date.today.strftime('%F').split('-')[0].to_i)
        return days_in_month
    # gives me the days in the current month of current year
    end

    def find_number_of_days_left_in_current_month
        days_left = find_number_of_days_in_current_month() - Date.today.strftime('%F').split('-')[2].to_i
        return days_left
    end

    def activity_miles_this_month
        miles = 0
        days = []
        days_passed_in_month = Date.today.strftime('%F').split('-')[2].to_i
        (0..days_passed_in_month-1).each { |i| days << Date.today-i}
        days.each do |day|
            miles += day_of_choice_activity_miles(day)
        end
        return miles
    end






end
