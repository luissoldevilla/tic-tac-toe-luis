'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('#1').on('click', events.clickX || events.clickO)
  // $('#2').on('click', events.clickX || events.clickO)
  // $('#3').on('click', events.clickX || events.clickO)
  // $('#4').on('click', events.clickX || events.clickO)
  // $('#5').on('click', events.clickX || events.clickO)
  // $('#6').on('click', events.clickX || events.clickO)
  // $('#7').on('click', events.clickX || events.clickO)
  // $('#8').on('click', events.clickX || events.clickO)
  events.addHandlers()
  $(document).ready(function () {
    $('#myModal').modal({
      backdrop: 'static'
    })
  })
})
