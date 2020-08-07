'use strict'

// Require:
const store = require('../store')

// Update Screen Functions:

// Only show sign up and sign in on landing page:
$('#authenticated').hide()

// Sign Up:
const signUpSuccess = function () {
  $('#message').text('all signed up! sign in because it\'s party thyme!')

  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('couldn\'t sign up! try again! we\'re rooting for you!')
}

// Sign In:
const signInSuccess = function (response) {
  $('#message').text('signed in! aloe there!')

  store.user = response.user

  $('form').trigger('reset')

  // Remove sign up and sign in options, show the rest:
  $('#unauthenticated').hide()
  $('#authenticated').show()
}

const signInFailure = function () {
  $('#message').text('couldn\'t sign in. do you need some encourage-mint?')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('come back soon! life would succ without you!')

  // Show only sign up and sign in again:
  $('#unauthenticated').show()
  // $('#sign-up').show()
  $('#authenticated').hide()
  // hide plant collection when signing back in after clicking see all plants and then signing out:
  $('#content').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('still signed in! guess you can\'t leaf me just yet')
}

// Change Password:
const changePasswordSuccess = function () {
  $('#message').text('you have a new password! forget-me-not!')

  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('password hasn\'t changed! everyone romaine calm!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
