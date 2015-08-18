class AddInfoToDatabase < ActiveRecord::Migration
  def change
  	add_column :coworks, :description, :text
  	add_column :coworks, :services, :text
  	add_column :coworks, :companies, :text
  	add_column :coworks, :latitude, :decimal
  	add_column :coworks, :longitude, :decimal
  end
end
