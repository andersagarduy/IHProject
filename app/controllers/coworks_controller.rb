class CoworksController < ApplicationController
	def index
		@coworks = Cowork.all
	end

	def show
		@cowork = Cowork.find params[:id]
		@jobs = User.uniq.pluck('job')
	end

	def index_data
		@coworks = Cowork.all
		render json: @coworks
	end

	def workers_data
		@users = User.where('lower(name) = ? AND lower(job) = ?', params[:Name].downcase, params[:Job].downcase)
		render json: @users
	end
end
