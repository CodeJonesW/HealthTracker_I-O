class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
      @user = User.find_by(email: user_login_params[:email])
      #User#authenticate comes from BCrypt

      if @user && @user.authenticate(user_login_params[:password])
        # encode token comes from ApplicationController
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
      else
        render json: { message: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def show 
      # debugger
      # string = request.authorization
      # token = JWT.decode(string, 'stay_fit')[0]
      # id = token["id"].to_i
      # @user = User.find(id)
      # debugger

      if @user
          user = UserSerializer.new(@user)
          render json: {user: user}
      else 
          render json: {error: ''}, status: 422
      end 
  end 


    private
   
    def user_login_params
      # params { user: {email: 'Chandler Bing', password: 'hi' } }
      params.require(:user).permit(:email, :password)
    end
end