class AddAttachmentBannerToPhotos < ActiveRecord::Migration
  def self.up
    change_table :photos do |t|
      t.attachment :banner
    end
  end

  def self.down
    remove_attachment :photos, :banner
  end
end
