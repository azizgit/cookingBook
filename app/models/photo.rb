class Photo < ActiveRecord::Base
  belongs_to :recipe

  has_attached_file :banner, styles: { slider:'845x435#',thumb: '100x100#' }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\Z/

end
