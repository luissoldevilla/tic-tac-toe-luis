
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#user-message-signUp').html('You are Sign Up!')
}

const signUpFail = function (data) {
  console.log(data)
  document.getElementById('form-signUp').reset()
  $('#user-message-signUp').html('something went wrong, try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response.user)
  $('#user-message-signIn').append('You are sign In!')
  $('#myModal').modal('hide')
  $('#table').hide()
}

const signInFail = function (error) {
  console.log('signResponse is ', error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('something went wrong, try again!')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('You have changed your password')
}

const changePasswordFail = function (data) {
  console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('Something went wrong, password not changed')
}

const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!')
  $('#myModal').modal()
  $('#play-count').html('')
  $('#player').html('')
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('Something went wrong')
}

const newGameSuccess = function (data) {
//  console.log(data)
  $('#myModal').modal('hide')
  $('#table').show()
  $('#play-count').html(function (i, val) { return +val + 1 })
  $('#o-winner-message').html('')
  $('#x-winner-message').html('')
  store.game = data.game
  console.log(data.game)
}

const newGameFail = function (data) {
}

const updateMove = function (data) {

}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  newGameSuccess,
  newGameFail,
  updateMove
}
