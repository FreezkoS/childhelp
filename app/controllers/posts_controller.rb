class PostsController < ApplicationController
 before_action :authenticate_user!, except: [:index, :show, :main]
  before_action :set_post, only: [ :show, :edit, :update, :destroy ]
    
 def main
 end

 def index
      @posts = Post.all.page params[:page]
 end
    
 def show
 end
   
 def new
     @post = Post.new
 end
    
 def create
     @post = Post.new(post_params)
     if @post.save
         redirect_to @post, success: 'Запись создана'
     else 
         render :new, danger: 'Запись не создана'
     end
 end
    
 def edit
 end
    
 def update
     if @post.update_attributes(post_params)
         redirect_to @post, success: 'Запись обновлена'
     else
         render :edit, danger: 'Запись не обновлена'
     end
 end
    
 def destroy
     @post.destroy
     redirect_to posts_path, success: 'Запись удалена'
 end
    
 private
    def post_params
        params.require(:post).permit(:title, :summary, :body, :image, :image2)
    end
    
    def set_post
             @post = Post.find(params[:id])
    end
end
