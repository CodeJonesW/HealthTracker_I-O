require 'faker'

User.destroy_all
Activity.destroy_all
ActivityComment.destroy_all
Goal.destroy_all
Consumption.destroy_all
ConsumptionComment.destroy_all

    # Run in rails console to alter the created at dates to see full function of graphs
    # Activity.all.each {|activity| activity.created_at = (rand*7).days.ago; activity.save}


    # Consumption.all.each {|consumption| consumption.created_at = (rand*7).days.ago; consumption.save}
    
    
    # Goal.all.each {|goal| goal.created_at = (rand*7).days.ago; goal.save}
    
    4.times do 
        User.create(:username => Faker::Internet.username, 
        :name => Faker::Name.name,
        :age => Faker::Number.within(range: 1..100),
        :weight => Faker::Number.within(range: 100..300),
        :height => Random.new.rand(5.0...6.9).to_s[0..2],
        :email => Faker::Internet.email,
        :password => '123',
        :gender => Faker::Gender.binary_type)
    end

    User.create(:username => "CodeJonesW", :name => "Will Jones", :age => 27, :weight => 180, :height => "6.4", :email => "willjones@blah.com", password: '123', :gender => 'male')



    50.times do 
        Activity.create(:user_id => Faker::Number.within(range: 1..11),
        :category => "run",
        :calories_burned => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3])
    end

    50.times do 
        Activity.create(:user_id => Faker::Number.within(range: 1..11),
        :category => "bike",
        :calories_burned => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3])
    end

    50.times do 
        Activity.create(:user_id => Faker::Number.within(range: 1..11),
        :category => "swim",
        :calories_burned => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3])
    end

    50.times do 
        Activity.create(:user_id => Faker::Number.within(range: 1..11),
        :category => "walk",
        :calories_burned => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3])
    end

    30.times do 
        Goal.create(:user_id => Faker::Number.within(range: 1..11),
        :completed => Faker::Boolean.boolean,
        :calories_to_burn => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3],
        :category => "walk")
    end

    30.times do 
        Goal.create(:user_id => Faker::Number.within(range: 1..10),
        :completed => Faker::Boolean.boolean,
        :calories_to_burn => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3],
        :category => "run")
    end

    30.times do 
        Goal.create(:user_id => Faker::Number.within(range: 1..11),
        :completed => Faker::Boolean.boolean,
        :calories_to_burn => Faker::Number.within(range: 100..3000),
        :distance => Random.new.rand(1.0...30.0).to_s[0..3],
        :category => "swim")
    end

    50.times do 
        Consumption.create(:user_id => Faker::Number.within(range: 1..11),
        :category => Faker::Food.vegetables,
        :calories_intaken => Faker::Number.within(range: 100..3000))
    end

    50.times do 
        Consumption.create(:user_id => Faker::Number.within(range: 1..11),
        :category => Faker::Food.fruits,
        :calories_intaken => Faker::Number.within(range: 100..3000))
    end

    50.times do 
        Consumption.create(:user_id => Faker::Number.within(range: 1..11),
        :category => Faker::Food.dish,
        :calories_intaken => Faker::Number.within(range: 100..3000))
    end

    50.times do 
        Consumption.create(:user_id => Faker::Number.within(range: 1..11),
        :category => Faker::Food.sushi,
        :calories_intaken => Faker::Number.within(range: 100..3000))
    end

