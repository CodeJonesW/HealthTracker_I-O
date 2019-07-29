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
        begin @consumption = Consumption.find(params[:id])
            render json: @consumption
        rescue
            render json: {status: "error", code: 404, message: "Consumption does not exist"}
        end
    end

    def destroy
        @consumption = Consumption.destroy(params[:id])
    end

    def update
        @consumption = Consumption.find(params[:id])
        if @consumption.update(c_params)
            render json: @consumption
        else
            render json: @consumption.errors, status: :unprocessable_entity
        end
    end



    private

	def c_params
		params.require(:consumption).permit(:user_id, :category, :calories_intaken)
    end
end
