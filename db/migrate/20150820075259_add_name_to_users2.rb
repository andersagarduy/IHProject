class AddNameToUsers2 < ActiveRecord::Migration
	def change
    	add_column :users, :name, :string
	end
end
