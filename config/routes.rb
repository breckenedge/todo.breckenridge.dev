Rails.application.routes.draw do
  namespace :api do
    resources :projects do
      get :todos, on: :member
    end
    resources :todos

    post 'login' => 'login#create'
  end

  resources :estimates
  resources :projects do
    post :complete, on: :member
    post :incomplete, on: :member
  end
  resource :profile, only: [:show, :update]
  resources :todos do
    post :complete, on: :member
    post :incomplete, on: :member
  end

  delete :log_out, to: "sessions#destroy", as: :log_out

  get :search, to: "search#index", as: :search
  get :login, to: "sessions#new"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "projects#index"
end
