class PosthsController < ApplicationController
  before_action :set_post, only: [ :show, :edit, :update, :destroy ]
    
 def index
      @posths = Posth.all.page params[:page]
 end
    
 def show
 end
   
 def new
     @posth = Posth.new
 end
    
 def create
     @posth = Posth.new(post_params)
     if @posth.save
         redirect_to @posth, success: 'Запись создана'
     else 
         render :new, danger: 'Запись не создана'
     end
 end
    
 def edit
 end
    
 def update
     if @posth.update_attributes(post_params)
         redirect_to @posth, success: 'Запись обновлена'
     else
         render :edit, danger: 'Запись не обновлена'
     end
 end
    
 def destroy
     @posth.destroy
     redirect_to posths_path, success: 'Запись удалена'
 end
    
 private
    def post_params
        params.require(:posth).permit(:title, :summary, :body, :image, :image2)
    end
    
    def set_post
             @posth = Posth.find(params[:id])
    end
end
