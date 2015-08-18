class RemoveInfoFromDatabase < ActiveRecord::Migration
  def up
    remove_column :coworks, :latitude
    remove_column :coworks, :longitude
  end

  def down
    add_column :coworks, :latitude, :decimal, {:precision=>10, :scale=>6}
    add_column :coworks, :longitude, :decimal, {:precision=>10, :scale=>6}
  end
end
