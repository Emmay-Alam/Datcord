class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user[:tag] = rand(1..9999)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :dob)
  end
end