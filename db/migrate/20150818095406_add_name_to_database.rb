class AddNameToDatabase < ActiveRecord::Migration
  def change
  	add_column :coworks, :name, :text
  end
end
