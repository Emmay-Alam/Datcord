<<<<<<< HEAD
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:show, :create]
    end

    resources :channels, only: [:update, :destroy]
  end

  root to: 'static_pages#root'
end
=======
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :channels, only: [:create]
    end

    resources :channels, only: [:show, :update, :destroy]
    resources :dms, only: [:index, :show, :destroy]
  end

  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'
end
>>>>>>> channel
