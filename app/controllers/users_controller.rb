class UsersController < ApplicationController
	before_action :authenticate_user!

	def profile
    	@user = current_user
    	render 'users/profile'
  	end

  	def create
  		@user = User.create( user_params )	
		  @user.save
  	end

    def index
      @users = User.where('name = ? && job = ?', params[:Name],  params[:Job])
    end

  	private

  	def user_params
 		params.require(:user).permit(:avatar)
	end
end
