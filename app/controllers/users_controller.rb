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
      @users = User.where("lower(name) = ? AND lower(job) = ?", params[:Name].downcase,  params[:Job].downcase)
    end

  	private

  	def user_params
 		params.require(:user).permit(:avatar)
	end
end
