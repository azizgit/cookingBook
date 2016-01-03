class Slider < ActiveRecord::Base
  belongs_to :recipe

  has_attached_file :image, styles: {large:'1970x737#' ,medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :name,:image,:presence => true

end
