'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Event Handler Functions:

// CREATE (add new plant)
const onCreatePlant = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createPlant(formData)
    .then(ui.createPlantSuccess)
    .catch(ui.createPlantFailure)
}

// GET/INDEX (see all plants)
const onIndexPlants = function (event) {
  event.preventDefault()

  api.indexPlants()
    .then(ui.indexPlantsSuccess)
    .catch(ui.indexPlantsFailure)
}

const onDestroyPlant = function (event) {
  event.preventDefault()

  // get id for plant who's remove button was clicked
  const plantId = $(event.target).data('id')
  console.log('this is plantId:' + plantId)
  api.destroyPlant(plantId)
    .then(ui.destroyPlantSuccess)
    .then(() => onIndexPlants(event))
    .catch(ui.destroyPlantFailure)
}
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
  onIndexPlants,
  onDestroyPlant
}
