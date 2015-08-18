class AddLatAndLonToDatabase < ActiveRecord::Migration
  def change
  	add_column :coworks, :latitude, :decimal, {:precision=>10, :scale=>6}
  	add_column :coworks, :longitude, :decimal, {:precision=>10, :scale=>6}
  end
end
