json.array!(@sliders) do |slider|
  json.extract! slider, :id, :name, :image, :recipe_id
  json.url slider_url(slider, format: :json)
end
