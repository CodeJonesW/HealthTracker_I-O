class ApplicationController < ActionController::API
  before_action :authorized

  def authorized
    if not logged_in?
      render json: { message: 'Please log in' }, status: :unauthorized
    end
  end

  def logged_in?
    !!current_user
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'stay_fit', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  # ... 

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'stay_fit')
  end
end
