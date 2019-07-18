
User.destroy_all
Activity.destroy_all
ActivityComment.destroy_all
Goal.destroy_all
Consumption.destroy_all
ConsumptionComment.destroy_all




User.create(:username => "SeeRoseCode", password: '123', :name => "RoseLake", :age => 31, :weight => 130, :height => "5'5", :email => "seerosecode@blah.com")
User.create(:username => "dekadekadeka", password: '123', :name => "Deka", :age => 31, :weight => 135, :height => "5'5", :email => "dekadekadeka@blah.com")
# User.create(:username => "evansallgucci", :name => "Evan Kim", :age => 24, :weight => 150, :height => "5'4", :email => "evankim@blah.com")
# User.create(:username => "Jaedaboss", :name => "Jae Park", :age => 27, :weight => 160, :height => "5'8", :email => "jaepark@blah.com")
# User.create(:username => "DharaTheCodeWizard", :name => "dhara", :age => 27, :weight => 120, :height => "5'4", :email => "dhara@blah.com")
# User.create(:username => "RomBombDotCom", :name => "Romy Magsoudhi", :age => 21, :weight => 180, :height => "5'10", :email => "rombomb@blah.com")
# User.create(:username => "CodeJonesW", :name => "Will Jones", :age => 27, :weight => 180, :height => "6'4", :email => "willjones@blah.com")
# User.create(:username => "MasterHan", :name => "Han Xu", :age => 31, :weight => 150, :height => "5'7", :email => "masterxu@blah.com")
# User.create(:username => "BatCat", :name => "scott", :age => 34, :weight => 180, :height => 5.9, :email => "scott@blah.com")
# User.create(:username => "Adub", :name => "AndrewAllen", :age => 24, :weight => 165, :height => "5'7", :email => "andrew@blah.com")
# User.create(:username => "paulatulis", :name => "Paula Tulis", :age => 26, :weight => 110, :height => "5'7", :email => "paula@blah.com")
# User.create(:username => "Pmoney", :name => "Preston Elliott", :age => 28, :weight => 180, :height => "5'11", :email => "pmoney@blah.com")
# User.create(:username => "TunDawg", :name => "Tun Khine", :age => 39, :weight => 165, :height => "5'7", :email => "tunkhine@blah.com")
# User.create(:username => "CodeJonesW", :name => "Will Jones", :age => 27, :weight => 180, :height => "6'4", :email => "willjones@blah.com")


# Activity.create(:user_id => User.last.id, :category => "run", :calories_burned => 500, :distance => "5 miles")
Activity.create(:user_id => User.first.id, :category => "run", :calories_burned => 500, :distance => "5 miles")
Activity.create(:user_id => User.second.id, :category => "run", :calories_burned => 500, :distance => "5 miles")
# Activity.create(:user_id => User.last.id, :category => "run", :calories_burned => 500, :distance => "5 miles")
# Activity.create(:user_id => User.last.id, :category => "run", :calories_burned => 500, :distance => "5 miles")


ActivityComment.create(:content => "yay its going to work", :user_id => User.last.id, :activity_id => Activity.last.id)


Goal.create(:user_id => User.last.id, :completed => false, :calories_to_burn => 600, :distance => "5 miles", :category => "walk")
Goal.create(:user_id => User.last.id, :completed => true, :distance => "5 miles", :category => "run")


Consumption.create(:user_id => User.last.id, :category => "1 slice of pizza", :calories_intaken => 700)

ConsumptionComment.create(:user_id => User.last.id, :consumption_id => Consumption.last.id, :content => "Woah fat boy thats some pizza")


Follow.create(user: User.first, followed_user: User.second)
Follow.create(user: User.second, followed_user: User.first)