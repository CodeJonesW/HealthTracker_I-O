class SessionsController < ApplicationController
  
    def create
        user = User.find_by_email(params[:user][:email])
        # If the user exists AND the password entered is correct.
        if user && user.authenticate(params[:user][:password])
          # Save the user id inside the browser cookie. This is how we keep the user 
          # logged in when they navigate around our website.
          render json: {token: 'success'}
        else
          render json: {errors: 'Didnt work. Incorrect. You suck.'}
        end
    end
  
  
  end