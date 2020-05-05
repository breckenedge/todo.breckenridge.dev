Rails.application.routes.draw do
  resource :profile, only: [:show, :update]
  resources :todo_categories
  resources :todos do
    post :complete, on: :member
    post :incomplete, on: :member
  end

  get :log_in, to: 'sessions#new', as: :log_in
  post :log_in, to: 'sessions#create'
  delete :log_out, to: 'sessions#destroy', as: :log_out

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'todos#index'
end
