Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  resources :api_keys
  resources :estimates
  resources :projects do
    patch :complete, on: :member
    patch :incomplete, on: :member
  end
  resource :profile, only: [:show, :update]
  resources :todos do
    match :complete, on: :member, via: [:get, :patch]
    patch :incomplete, on: :member
  end

  get :log_in, to: "sessions#new", as: :log_in
  post :log_in, to: "sessions#create"
  delete :log_out, to: "sessions#destroy", as: :log_out

  get :search, to: "search#index", as: :search

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "projects#index"
end
