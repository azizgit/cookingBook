class Recipe < ActiveRecord::Base
  belongs_to :user
  has_one :slider
  has_many :ingredients
  has_many :directions
  has_many :tags
  has_many :photos

  accepts_nested_attributes_for :ingredients, reject_if: proc{|attributes| attributes['name'].blank?}, allow_destroy: true
  accepts_nested_attributes_for :directions, reject_if: proc{|attributes| attributes['step'].blank?}, allow_destroy: true
  accepts_nested_attributes_for :tags, reject_if: proc{|attributes| attributes['name'].blank?}, allow_destroy: true
  ##accepts_nested_attributes_for :photos, reject_if: proc{|attributes| attributes['banner'].blank?}, allow_destroy: true
  accepts_nested_attributes_for :photos, reject_if: :all_blank, allow_destroy: true
  #accepts_nested_attributes_for :photos, allow_destroy: true



  has_attached_file :image, styles: { medium: '300x300>',large:'749x521#', thumb: '100x100>' }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/




  validates :title,:description,:image,:presence => true

end
