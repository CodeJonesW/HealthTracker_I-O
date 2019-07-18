class User < ApplicationRecord
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
        weekly_activities = []
        self.activities.each do |activity|
            if (activity.created_at.strftime('%U') == Time.now.strftime('%U') && activity.created_at.year == Time.now.year)
                weekly_activities << activity
            end
        end
        return weekly_activities.length
    end


    def total_monthly_activities
        monthly_activities = []
        self.activities.each do |activity|
            if (activity.created_at.month == Time.now.month && activity.created_at.year == Time.now.year)
                monthly_activities << activity
            end
        end
        return monthly_activities.length
    end

    def total_yearly_activities
        yearly_activities = []
        self.activities.each do |activity|
            if (activity.created_at.year == Time.now.year)
                yearly_activities << activity
            end
        end
        return yearly_activities.length
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

    # calories intaken

    def daily_calories_intaken
        daily_total_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.today?)
                daily_total_calories_intaken += consumption.calories_intaken 
            end
        end
        return daily_total_calories_intaken
    end


    def WeeklyCaloriesIntaken
        weekly_calories_intaken = 0
          self.consumption.each do |activity|
            if (consumption.created_at.strftime('%U') == Time.now.strftime('%U') && consumption.created_at.year == Time.now.year)
                weekly_total_calories_intaken += consumption.calories_intaken 
            end
        end
        return weekly_calories_intaken
    end

    def monthly_calories_intaken
        monthly_calories_intaken = 0
          self.consumptions.each do |consumption|
            if (consumption.created_at.month === Time.now.month && consumption.created_at.year == Time.now.year)
                monthly_calories_intaken += consumption.calories_intaken 
            end
        end
        return monthly_calories_intaken
    end

    def yearly_calories_intaken
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
        successfully_completed_goals = []
        self.goals.each do |goal|
            if (goal.completed == true)
                successfully_completed_goals << goal
            end
        end
        return successfully_completed_goals
    end

    def goals_to_complete
        pending_goals = []
        self.goals.each do |goal|
            if (goal.completed == false)
                pending_goals << goal
            end
        end
        return pending_goals
    end




end
