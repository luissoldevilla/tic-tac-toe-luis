
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#user-message-signUp').append('You are Sign Up!')
}

const signUpFail = function (data) {
  console.log(data)
  $('#user-message-signUp').append('something went wrong, try again!')
}

const signInSuccess = function (response) {
  // console.log(data)
  store.user = response.user
  console.log(response.user)
  $('#user-message-signIn').append('You are sign In!')
  $('#myModal').modal('hide')
}

const signInFail = function (error) {
  console.log('signResponse is ', error)
  $('#user-message-signIn').append('something went wrong, try again!')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#user-message-changePassword').append('You have changed your password')
}

const changePasswordFail = function (data) {
  console.log(data)
  $('#user-message-changePassword').append('Something went wrong, password not changed')
}

const signOutSuccess = function (data) {
  $('#user-message-signOut').append('You are sign Out!')
  $('#myModal').modal()
}

const signOutFail = function (data) {
  $('#user-message-signOut').append('Something went wrong')
}

const newGameSuccess = function () {

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
  newGameSuccess
}
