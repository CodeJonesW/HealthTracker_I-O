class FollowsController < ApplicationController
    def index
        @follows = Follow.all
        render json: @follows
    end

    def create
        @follow = Follow.create(f_params)
        render json: @follow
    end

    def show
        @follow = Follow.find(params[:id])
        render json: @follow
    else
        render json: {status: "error", code: 404, message: "follow does not exist"}
    end

    def destroy
        @follow = Follow.destroy(params[:id])
    else
        render json: {status: "error", code: 404, message: "follow does not exist"}
    end


    private

	def f_params
		params.require(:activity).permit(:user_id, :followed_user_id)
    end
end
