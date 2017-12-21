Rails.application.routes.draw do
  devise_for :users
    resources :posts
    resources :posths
    resources :posthhs
 root 'posts#main'
 get 'static/programms'
get 'static/about'
    get 'static/contacts'
    
get 'static/projectCenterForMam'
get 'static/projectMama'
get 'static/projectPervoePridannoe'
get 'static/projectZdorovie'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
