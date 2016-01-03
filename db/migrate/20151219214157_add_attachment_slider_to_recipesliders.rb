class AddAttachmentSliderToRecipesliders < ActiveRecord::Migration
  def self.up
    change_table :recipesliders do |t|
      t.attachment :slider
    end
  end

  def self.down
    remove_attachment :recipesliders, :slider
  end
end
