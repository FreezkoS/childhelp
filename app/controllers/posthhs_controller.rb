class PosthhsController < ApplicationController
  before_action :set_post, only: [ :show, :edit, :update, :destroy ]
    
 def index
      @posthhs = Posthh.all.page params[:page]
 end
    
 def show
 end
   
 def new
     @posthh = Posthh.new
 end
    
 def create
     @posthh = Posthh.new(post_params)
     if @posthh.save
         redirect_to @posthh, success: 'Запись создана'
     else 
         render :new, danger: 'Запись не создана'
     end
 end
    
 def edit
 end
    
 def update
     if @posthh.update_attributes(post_params)
         redirect_to @posthh, success: 'Запись обновлена'
     else
         render :edit, danger: 'Запись не обновлена'
     end
 end
    
 def destroy
     @posthh.destroy
     redirect_to posthhs_path, success: 'Запись удалена'
 end
    
 private
    def post_params
        params.require(:posthh).permit(:title, :summary, :body, :image)
    end
    
    def set_post
             @posthh = Posthh.find(params[:id])
    end
end