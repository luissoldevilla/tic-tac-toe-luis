
const api = require('./api')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

let currentPlayer = 'X'

const switchPlayers = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  console.log(currentPlayer)
  return currentPlayer
}

const addHandlers = function () {
  $('#form-signUp').on('submit', onFormSignUp)
  $('#form-signIn').on('submit', onFormSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.cell').on('click', function () {
    console.log(this)
    $(this).text(currentPlayer)
    switchPlayers()
  })
}

const onFormSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onFormSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const gameBoard = ['', '', '', '', '', '', '', '', '']

const onGameBoard = function (event) {
  event.preventDefault()

  console.log(gameBoard)
}

module.exports = {
  addHandlers,
  gameBoard,
  onGameBoard
}
