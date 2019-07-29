Rails.application.routes.draw do
  resources :follows
  resources :consumption_comments
  resources :activity_comments
  resources :goals
  resources :consumptions
  resources :activities
  resources :users, except: [:destroy]

  post '/login' => 'auth#create'
  post '/signup' => 'users#create'
  get '/profile' => 'users#show'
  get '/current_user' => 'auth#show'
end
