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

import Calendar from 'components/Calendar'
import formatDate from 'helpers/formatDate'
import parseDate from 'helpers/parseDate'

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.datepicker').forEach(function (elem) {
    const input = elem.querySelectorAll('input')[0]
    const outlet = elem.querySelectorAll('.outlet')[0]
    let value = input.getAttribute('value')

    const onChange = (date) => {
      let value = ''
      if (date) { value = formatDate(date) }
      input.setAttribute('value', value)
    }

    let date = undefined
    if (value) { date = parseDate(value) }

    ReactDOM.render(<Calendar value={date} onChange={onChange} />, outlet)
  })
})
