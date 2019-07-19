class ConsumptionsController < ApplicationController

    def index
        @consumptions = Consumption.all
        render json: @consumptions
    end

    def create
        @consumption = Consumption.create(c_params)
        render json: @consumption_comment
    end

    def show
        @consumption = Consumption.find(params[:id])
        render json: @consumption
    end

    def destroy
        @consumption = Consumption.destroy(params[:id])
    end



    private

	def c_params
		params.require(:consumption).permit(:user_id, :category, :calories_intaken)
    end
end
