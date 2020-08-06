'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Event Handler Functions:
const onCreatePlant = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createPlant(formData)
    .then(ui.createPlantSuccess)
    .catch(ui.createPlantFailure)
}

const onIndexPlants = function (event) {
  event.preventDefault()

  api.indexPlants()
    .then(ui.indexPlantsSuccess)
    .catch(ui.indexPlantsFailure)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.signIn(formData)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.changePassword(formData)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }

module.exports = {
  onCreatePlant,
  onIndexPlants
  // onSignIn,
  // onSignOut,
  // onChangePassword
}
