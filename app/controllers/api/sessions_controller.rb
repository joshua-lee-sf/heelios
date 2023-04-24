class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]

  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: {user: nil}
    end
  end

  def create
    email = params[:email]
    password = params[:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login!(@user)
      render 'api/users/show'
      puts 'successful'
    else
      puts 'failed'
      render json: {errors: ['The provided credentials were invalid.']}, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: {message: 'success'}
  end
end
