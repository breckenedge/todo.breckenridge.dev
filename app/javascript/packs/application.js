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
import TodoEditor from 'components/TodoEditor'
import AuthenticityTokenContext from 'components/AuthenticityTokenContext'
import ProjectOptionsContext from 'components/ProjectOptionsContext'

const urlParam = (name) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

document.addEventListener('DOMContentLoaded', function () {
  const authToken = document.querySelector('meta[name=csrf-token]').getAttribute('content')
  const outlet = document.querySelector('#outlet')

  if (outlet) {
    ReactDOM.render(
      <AuthenticityTokenContext.Provider value={authToken}>
        <ProjectOptionsContext.Provider value={window.projectOptions}>
          <BrowserRouter>
            <Switch>
              <Route path="/todos/:id/edit">
                <TodoEditor
                  todo={window.todo}
                />
              </Route>
              <Route path="/todos/new">
                <TodoEditor
                  todo={window.todo}
                  returnTo={urlParam('project_id') ? `/projects/${urlParam('project_id')}` : "/todos"}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </ProjectOptionsContext.Provider>
      </AuthenticityTokenContext.Provider>
    , outlet)
  }
})
