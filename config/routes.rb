Rails.application.routes.draw do
  resources :todo_categories
  resources :todos
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'todos#index'
end
