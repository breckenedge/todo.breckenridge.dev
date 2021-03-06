// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TodoForm from 'components/TodoForm'

document.addEventListener('DOMContentLoaded', function () {
  const authToken = document.querySelector('meta[name=csrf-token]').getAttribute('content')
  const outlet = document.querySelector('#outlet')

  if (outlet) {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/todos/:id/edit">
            <TodoForm
              authenticityToken={authToken}
              todo={window.todo}
              projectOptions={window.projectOptions}
            />
          </Route>
          <Route path="/todos/new">
            <TodoForm
              authenticityToken={authToken}
              todo={window.todo}
              projectOptions={window.projectOptions}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    , outlet)
  }
})
