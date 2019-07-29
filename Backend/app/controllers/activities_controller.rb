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
        begin @activity = Activity.find(params[:id])
            render json: @activity
        rescue
            render json: {status: "error", code: 404, message: "Activity does not exist"}
        end
    end


    def destroy
        @activity = Activity.destroy(params[:id])
    end

    def update
        @activity = Activity.find(params[:id])
        if @activity.update(a_params)
            render json: @activity
        else
            render json: @activity.errors, status: :unprocessable_entity
        end
    end


    private

	def a_params
		params.require(:activity).permit(:user_id, :category, :calories_burned, :distance)
    end
end
