Rails.application.routes.draw do
    resources :posts
    resources :posths
 root 'posts#main'
 get 'static/programms'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
