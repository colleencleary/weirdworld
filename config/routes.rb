Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# =================================================
#             ROUTES FOR ATTRACTIONS MODEL
# =================================================
get '/attractions', to: 'attractions#index'
get '/attractions/:id', to: 'attractions#show'
post '/attractions', to: 'attractions#create'
delete '/attractions/:id', to: 'attractions#delete'
put '/attractions/:id', to: 'attractions#update'


# =================================================
#             ROUTES FOR COMMENTS MODEL
# =================================================
get '/comments', to: 'comments#index'
get '/comments/:id', to: 'comments#show'
post '/comments', to: 'comments#create'
delete '/comments/:id', to: 'comments#delete'
put '/comments/:id', to: 'comments#update'

# =================================================
#             ROUTES FOR TAGS MODEL
# =================================================
get '/tags', to: 'tags#index'
get '/tags/:id', to: 'tags#show'
post '/tags', to: 'tags#create'
delete '/tags/:id', to: 'tags#delete'
put '/tags/:id', to: 'tags#update'

# =================================================
#             ROUTES FOR EVENTS MODEL
# =================================================
get '/events', to: 'events#index'
get '/events/:id', to: 'events#show'
post '/events', to: 'events#create'
delete '/events/:id', to: 'events#delete'
put '/events/:id', to: 'events#update'
end
