Rails.application.routes.draw do
  resources :follows
  resources :consumption_comments
  resources :activity_comments
  resources :goals
  resources :consumptions
  resources :activities
  resources :users, only: [:create]

  post '/login' => 'auth#create'
  get '/profile', to: 'users#show'


end
