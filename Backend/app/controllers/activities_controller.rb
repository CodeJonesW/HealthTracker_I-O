class ActivitiesController < ApplicationController
    def index
        @activities = Activity.all
        render json: @activities
    end

    def create
        @activity = Activity.create(a_params)
        render json: @activity
    end

    def show
        @activity = Activity.find(params[:id])
        render json: @activity
    end

    def destroy
        @activity = Activity.destroy(params[:id])
    end


    private

	def a_params
		params.require(:activity).permit(:user_id, :category, :calories_burned, :distance)
    end
end
