## This is problems md
1. Could not find out banner image in header.
solution:

open main.css and edit the image url:
before:
.banner-blog {
  background-image: url("../images/temp-images/banner-blog.jpg");
}

after:

.banner-blog {
  background-image: url("temp-images/banner-blog.jpg");
}

2. Log out link does not work while I use jquery cdn

solution: You can use cdn for jquery but when you use jquery-ui cdn,it will make disturb.

So, use jquery cdn but do not use cdn for jquery-ui. Use gem jquery for jquery-ui

3. How to get current user id ?

solution:

<% @user_id= current_user.id %>
<%= @user_id %>

4. 'Remove' btn is not work in ingredient_field

solution:
Must use code inside 'nested-fields' div
 example:
 <div class="nested-fields">.....</div>


5. How to give query order of ascending/descending and retrive only first/last 6 data from a table ?

solution:
@popular_items= Recipe.all.order(created_at: :asc).limit(6)
@latest_items =Recipe.all.order(created_at: :desc).limit(6)

6. Recipe details page accordians for step / search show-hidden is not work properly.

solution:
Use jquery function for slider(flexslider/wow slider) in below of all js files and jquery function for alert, page load ,accordian,tabs ,swipebox { make a new js file named home.js and call it from application.js as like as //= require home and cut function of alert,page load,accordian,tabs,swipebox from custom.js and paste it here } below turbolinks js.

Warning: Do not use cdn for jQuery-ui nor devise logout link will not work.You should use  built in jQuery-ui for work smoothly.
Warning: custom.js/main.js should use below of all js file order or last in order nor some function will not work properly as like as slider.



7. How to add nested file uploading system using paperclip with cocoon gem ?

solution:

We can make a nested file uploading sytem using paperclip with cocoon gem.

i) Make a photo model belongs to recipe
From terminal:
$ rails g model photo recipe:references

ii) Add banner (paperclip) with Photo model
From terminal:
 $ rails g paperclip Photo banner
 
 iii) Open recipe.rb and add this lines:
 has_many :photos
 accepts_nested_attributes_for :photos, reject_if: :all_blank, allow_destroy: true
 
 iv) Open photo.rb and add this lines (we mistake,we put these lines in recipe.rb but these code in stay in that model which has it's column e.g. banner->photos):
 
   has_attached_file :banner, styles: { large:'749x521#',thumb: '100x100#' }, default_url: '/images/:style/missing.png'
   validates_attachment_content_type :banner, content_type: /\Aimage\/.*\Z/

 v) Now open recipes_controller.rb and this lines on recipe_params method "photos_attributes:[:id,:banner,:_destroy]"
  
    def recipe_params
        params.require(:recipe).permit(:title, :description,:video,:video_link,:yield,:servings,:preparation_time,:cook_time,:ready_in,:user_id,:image,ingredients_attributes:[:id,:name,:_destroy],directions_attributes:[:id,:step,:_destroy],tags_attributes:[:id,:name,:_destroy],photos_attributes:[:id,:banner,:_destroy])
    end
  

 vi) open views/recipes/_form.html.erb and put down this code:
 
 <%= f.label :image_for_recipe_page_sliders %>
                 <div class="field">
                   <div id="ingredients">
                     <%= f.fields_for :photos do |photo| %>
                         <%= render 'recipes/photo_fields', f: photo %>
                     <% end %>
                     <%= link_to_add_association '', f, :photos,:class=>"add-button add-ing fa fa-plus" %>
                   </div>
                 </div>


vii) Now create a partial for photo_fields named _photo_fields.html.erb inside recipes folder and put down this code:

<div class="nested-fields">
  <div class="add-fields">

    <%= f.file_field :banner %>
    <%= link_to_remove_association '', f, :class => 'del-list fa fa-trash' %>
  </div>
</div>


8. How to integrate search in cooking Book index page ?

Solution:
i) Make a search form at first in index.html.erb
<%= form_tag root_path, :method => 'get' do %>
                      <div class="search-field">
                        <%= search_field_tag :search, params[:search] %>
                        <button type="submit"><i class="fa fa-search"></i></button>
                      </div>
<% end %>

ii) write specefic search sql  in home_controller.rb->def index (where index method):
@search_items=Recipe.where('title LIKE ?',params[:search])

iii) Now open again home/index.html.erb file and write this code for showing search result in index page:

<% if !params[:search].blank? && !@search_items.blank?%>
              <div class="recipe-set">
                <h2>Search Result</h2>
                <div class="boxed-recipes text-center">
                  <% @search_items.each do |s| %>
                      <!--single recipe-->
                          <div class="recipe-single animated wow flipInY">
                            <div class="recipe-image">
                              <a href="<%= recipe_path(s.id) %>"><%= image_tag s.image.url(:medium) %></a>
                            </div>
                            <div class="outer-detail">
                              <div class="detail">
                                <h3><a href="<%= recipe_path(s.id) %>"><%= s.title %></a></h3>
                                </div>
                              </div>
                            </div>
                         </div>
                          <!--single recipe ends-->
                  <% end %>
               </div>
              </div>
  <% end %>
added for forking
