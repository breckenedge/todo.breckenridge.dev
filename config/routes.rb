Rails.application.routes.draw do
  resources :todos, only: :index
  resources :projects do
    patch :complete, on: :member
    patch :incomplete, on: :member

    resources :todos do
      # GET verb allowed here so that the task can be completed/incompleted from an emailed link.
      match :complete, on: :member, via: [:get, :patch]
    end
  end
  resource :profile, only: [:show, :update]

  get :today, to: "home#today"
  get :log_in, to: "sessions#new", as: :log_in
  post :log_in, to: "sessions#create"
  delete :log_out, to: "sessions#destroy", as: :log_out

  get :search, to: "search#index", as: :search

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "projects#index"
end
