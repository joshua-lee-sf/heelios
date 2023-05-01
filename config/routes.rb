Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
  end
  
  get '*path', to: "static_pages#frontend_index", constraints: -> (req) {!req.xhr? && req.format.html?}
end
