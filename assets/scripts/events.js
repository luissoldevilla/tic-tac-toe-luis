
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

const gameBoard = ['', '', '', '', '', '', '', '', '']

const notClick = function (event) {
  if (gameBoard[1] === 'X' || 'O') {
  }
}

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
  $('.cell').on('click', onUpdateMove)
}

const onUpdateMove = function (event) {
  event.preventDefault()
  api.updateMove()
    .then(ui.updateMoveSuccess)
    .catch(ui.updateMoveFail)
  console.log(gameBoard)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('working?')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)

  gameBoard[0] = ''
  gameBoard[1] = ''
  gameBoard[2] = ''
  gameBoard[3] = ''
  gameBoard[4] = ''
  gameBoard[5] = ''
  gameBoard[6] = ''
  gameBoard[7] = ''
  gameBoard[8] = ''

  $('.cell').html('')
  console.log(gameBoard)
}

const onGameBoard = function (event) {
  gameBoard.splice(event.target.id, 1, currentPlayer)
  console.log(gameBoard)
  $(this).text(currentPlayer)
  checkWin()
  switchPlayers()
  notClick()
}

const checkWin = function () {
  if (gameBoard[0] === 'X' &&
      gameBoard[1] === 'X' &&
      gameBoard[2] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[3] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[5] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[6] === 'X' &&
    gameBoard[7] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[0] === 'X' &&
    gameBoard[3] === 'X' &&
    gameBoard[6] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[1] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[7] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[2] === 'X' &&
    gameBoard[5] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[0] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
    gameBoard[6] === 'X' &&
    gameBoard[4] === 'X' &&
    gameBoard[2] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
  // ------------ this checks O
    gameBoard[0] === 'O' &&
    gameBoard[1] === 'O' &&
    gameBoard[2] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[3] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[5] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[6] === 'O' &&
    gameBoard[7] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[0] === 'O' &&
    gameBoard[3] === 'O' &&
    gameBoard[6] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[1] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[7] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[2] === 'O' &&
    gameBoard[5] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[0] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
    gameBoard[6] === 'O' &&
    gameBoard[4] === 'O' &&
    gameBoard[2] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
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
  checkWin,
  notClick
}
