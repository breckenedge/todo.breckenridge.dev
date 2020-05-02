Rails.application.routes.draw do
  resources :todo_categories
  resources :todos do
    post :complete, on: :member
    post :incomplete, on: :member
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'todos#index'
end
