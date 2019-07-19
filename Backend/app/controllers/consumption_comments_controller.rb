class ConsumptionCommentsController < ApplicationController
    def index
        @consumption_comments = ConsumptionComment.all
        render json: @consumption_comments
    end

    def create
        @consumption_comment = ConsumptionComment.create(cc_params)
        render json: @consumption_comment
    end

    def show
        @consumption_comment = ConsumptionComment.find(params[:id])
        render json: @consumption_comment
    else
        render json: {status: "error", code: 404, message: "consumption comment does not exist"}
    end

    def destroy
        @activity_comment = ActivityComment.destroy(params[:id])
    else
        render json: {status: "error", code: 404, message: "consumption comment does not exist"}
    end

    private

	def cc_params
		params.require(:consumption_comment).permit(:user_id, :consumption_id, :content)
    end
end
