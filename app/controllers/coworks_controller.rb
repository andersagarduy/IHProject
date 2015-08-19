class CoworksController < ApplicationController
	def index
		@coworks = Cowork.all
	end

	def show
		@cowork = Cowork.find params[:id]
	end

	def index_data
		@coworks = Cowork.all
		render json: @coworks
	end
end
