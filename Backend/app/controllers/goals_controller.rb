class GoalsController < ApplicationController
    def index
        @goals = Goal.all
        render json: @follows
    end

    def create
        @goal = Goal.create(g_params)
        render json: @goal
    end

    def show
        @goal = Goal.find(params[:id])
        render json: @goal
    end

    def destroy
        @goal = Goal.destroy(params[:id])
    end


    private

	def g_params
		params.require(:goal).permit(:user_id, :completed, :calories_to_burn, :category, :distance)
    end
end
