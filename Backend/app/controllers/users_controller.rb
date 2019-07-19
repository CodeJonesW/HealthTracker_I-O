class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  

    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find(params[:id])
      render json: @user
    else
      render json: {status: "error", code: 404, message: "User does not exist"}
    end

    def create
        @user = User.create(new_user_params)
        if @user.valid?
          @token = encode_token(user_id: @user.id)
          render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def destroy
      @user = User.destroy(params[:id])
    else
        render json: {status: "error", code: 404, message: "follow does not exist"}
    end

    def profile
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end
    
    


  private

	def new_user_params
		params.require(:user).permit(:name, :username, :password, :password_confirmation, :email, :age, :weight, :height, :gender)
  end
  
end
