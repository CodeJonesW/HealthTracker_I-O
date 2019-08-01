class ActivitiesController < ApplicationController
    def index
        @activities = Activity.all
        render json: @activities
    end

    def create
        @activity = Activity.create(a_params)

        user = UserSerializer.new(@user)
        render json: {user: user}
        # render json: @activity
    end

    
    def show
        begin @activity = Activity.find(params[:id])
            render json: @activity
        rescue
            render json: {status: "error", code: 404, message: "Activity does not exist"}
        end
    end


    def destroy
       if  @activity = Activity.destroy(params[:id])
            user = UserSerializer.new(@user)
            render json: {user: user}
       end
    end

    def update
        @activity = Activity.find(params[:id])
        if @activity.update(a_params)
            user = UserSerializer.new(@user)
            render json: {user: user}
            # render json: @activity
        else
            render json: @activity.errors, status: :unprocessable_entity
        end
    end


    private

	def a_params
		params.require(:activity).permit(:user_id, :category, :calories_burned, :distance)
    end
end
