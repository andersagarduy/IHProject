class CoworksController < ApplicationController
	def index
		@coworks = Cowork.all
	end

	def show
		@coworks = Cowork.all
	end
end
