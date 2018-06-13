
const api = require('./api')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

let currentPlayer = 'X'

const switchPlayers = function () {
  // if (currentPlayer === 'X' || 'O') {
  //
  // } else if (currentPlayer === 'X') {
  //   currentPlayer = 'O'
  // } else {
  //   currentPlayer = 'X'
  // }
  // return currentPlayer
  //
  // before
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('#player').html('X is Playing')
  } else {
    currentPlayer = 'X'
    $('#player').html('O is Playing')
  }
  return currentPlayer
}
// if (currentPlayer === 'X' || 'O') {
//   this.value
// }

const gameBoard = ['', '', '', '', '', '', '', '', '']

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const addHandlers = function () {
  $('#form-signUp').on('submit', onFormSignUp)
  $('#form-signIn').on('submit', onFormSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.cell').on('click', onGameBoard)
  $('#new-game').on('click', onNewGame)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log()
  // api.newGame()
  //   .then(ui.newGameSuccess)
  //   .catch(ui.newGameFail)
  $('.cell').html('')
}
// onGameBoard push the value of the ID to the gameBoard array
// and also alternates them
// Grab a value of the click on cell and push it
// to the corresponding gameBoard array index
const onGameBoard = function (event) {
  // console.log(gameBoard)
  gameBoard.splice(event.target.id, 1, currentPlayer)
  console.log(gameBoard)
  // console.log(event.target.id)
  // event.target.id
  $(this).text(currentPlayer)
  checkWin()
  switchPlayers()
}

const checkWin = function () {
  if (gameBoard[0] === 'X' &&
      gameBoard[1] === 'X' &&
      gameBoard[2] === 'X'
  ) {
    alert('Win X')
    // console.log(checkWin)
  } else if (
    gameBoard[3] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[5] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[6] === 'X' &&
    gameBoard[7] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[0] === 'X' &&
    gameBoard[3] === 'X' &&
    gameBoard[6] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[1] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[7] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[2] === 'X' &&
    gameBoard[5] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[0] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    alert('Win X')
  } else if (
    gameBoard[6] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[2] === 'X'
  ) {
    alert('Win X')
  } else if (
  // ------------ this checks O
    gameBoard[0] === 'O' &&
    gameBoard[1] === 'O' &&
    gameBoard[2] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[3] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[5] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[6] === 'O' &&
    gameBoard[7] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[0] === 'O' &&
    gameBoard[3] === 'O' &&
    gameBoard[6] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[1] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[7] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[2] === 'O' &&
    gameBoard[5] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[0] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    alert('Win O')
  } else if (
    gameBoard[6] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[2] === 'O'
  ) {
    alert('Win O')
  }
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

module.exports = {
  addHandlers,
  gameBoard,
  winCombos,
  checkWin
}
