class HomeController < ApplicationController
  layout 'home_layout'

  def index
    #@search_items=Recipe.where('title LIKE ?','%#{params[:search]}%')
    @search_items=Recipe.where('title LIKE ?',params[:search])
    @popular_items= Recipe.all.order(created_at: :asc).limit(6)
    @latest_items =Recipe.all.order(created_at: :desc).limit(6)

    @popular_items_side= Recipe.all.order(created_at: :asc).limit(4)
    @latest_items_side =Recipe.all.order(created_at: :desc).limit(4)

  end

  def admin
    if user_signed_in?
      redirect_to home_admin_path
    else
      redirect_to new_user_session_path
    end

  end
end


