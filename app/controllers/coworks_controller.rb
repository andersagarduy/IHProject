class CoworksController < ApplicationController
	def index
		@coworks = Cowork.all
	end

	def show
		@cowork = Cowork.find params[:id]
	end
end
