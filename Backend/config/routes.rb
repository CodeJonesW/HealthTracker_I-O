Rails.application.routes.draw do
  resources :follows
  resources :consumption_comments
  resources :activity_comments
  resources :goals
  resources :consumptions
  resources :activities
  resources :users

  post '/login' => 'sessions#create'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

end
