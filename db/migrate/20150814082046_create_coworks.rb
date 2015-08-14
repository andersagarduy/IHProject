class CreateCoworks < ActiveRecord::Migration
  def change
    create_table :coworks do |t|

      t.timestamps null: false
    end
  end
end
