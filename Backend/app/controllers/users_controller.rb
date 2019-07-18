class UsersController < ApplicationController
    
    def new
    end

    def create
        user = User.new(user_params)
        if user.save
          session[:user_id] = user.id
          redirect_to '/'
        else
          redirect_to '/signup'
        end
    end
    
    


    private
	def new_user_params
		params.require(:user).permit(:name, :username, :password, :password_confirmation, :email, :age, :weight, :height)
	end
end
