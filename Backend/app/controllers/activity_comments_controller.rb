class ActivityCommentsController < ApplicationController
    
    def index
        @activity_comments = ActivityComment.all
        render json: @activity_comments
    end

    def create
        @activity_comment= ActivityComment.create(ac_params)
        render json: @activity_comment
    end

    def show
        begin @activity_comment = ActivityComment.find(params[:id])
            render json: @activity_comment
        rescue
            render json: {status: "error", code: 404, message: "Activity Comment does not exist"}
        end
    end

    def destroy
        @activity_comment = ActivityComment.destroy(params[:id])
    end



    private

	def ac_params
		params.require(:activity_comment).permit(:user_id, :activity_id, :content)
    end
end
