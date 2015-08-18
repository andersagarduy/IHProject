class AddCharacteristicsToDatabase < ActiveRecord::Migration
  def change
  	add_column :coworks, :characteristics, :text
  end
end
