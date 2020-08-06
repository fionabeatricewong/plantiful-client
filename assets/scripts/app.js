'use strict'

// Require:
const authEvents = require('./auth/events')
const plantEvents = require('./plants/events')

// Event Listeners:
$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Plant
  $('#create-plant').on('submit', plantEvents.onCreatePlant)
  $('#index-plants').on('click', plantEvents.onIndexPlants)
})
