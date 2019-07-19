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
    # else
    #     render json: {status: "error", code: 404, message: "consumption does not exist"}
    end

    def destroy
        @consumption = Consumption.destroy(params[:id])
    # else
    #     render json: {status: "error", code: 404, message: "consumption does not exist"}
    end



    private

	def c_params
		params.require(:consumption).permit(:user_id, :category, :calories_intaken)
    end
end
