
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
  return currentPlayer
}

const gameBoard = ['', '', '', '', '', '', '', '', '']

const addHandlers = function () {
  $('#form-signUp').on('submit', onFormSignUp)
  $('#form-signIn').on('submit', onFormSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.cell').on('click', onGameBoard)
}

const onGameBoard = function (event) {
  // console.log(gameBoard)
  gameBoard.splice(event.target.id, 1, currentPlayer)
  console.log(gameBoard)
  // console.log(event.target.id)
  // event.target.id
  $(this).text(currentPlayer)
  // console.log(gameBoard)
  switchPlayers()
  // }
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

// Grab a value of the click on cell and push it
// to the corresponding gameBoard array index
// const gameBoard = ['', '']
//
// const onGameBoard = function () {
//   if ($('#1').on('click')) {
//     addToBoard()
//   }
//   return this
// }
//
// const addToBoard = function () {
//   gameBoard.splice(1, 0, 'thisworks?')
//   console.log('hello ')
// }

// const addToBoard = function () {
//   gameBoard.splice(1, 0, 'thisworks?')
//   console.log('hello ')
// }

module.exports = {
  addHandlers,
  gameBoard
}
