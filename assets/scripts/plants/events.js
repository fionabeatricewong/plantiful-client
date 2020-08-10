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
    // .then(ui.indexPlantsSuccessMessages)
    .catch(ui.indexPlantsFailure)

  ui.indexPlantsSuccessMessages()
}

// DESTROY (remove selected plant)
const onDestroyPlant = function (event) {
  event.preventDefault()

  // get id for plant who's remove button was clicked
  const plantId = $(event.target).data('id')
  // console.log('this is plantId:' + plantId)
  api.destroyPlant(plantId)
    .then(ui.destroyPlantSuccess)
    .then(() => onIndexPlants(event))
    // .then(api.indexPlants)
    .catch(ui.destroyPlantFailure)
}

// UPDATE (update info for selected plant)
const onUpdatePlant = function (event) {
  event.preventDefault()

  const plantId = $(event.target).data('id')

  const form = event.target
  const formData = getFormFields(form)

  api.updatePlant(plantId, formData)
    .then(ui.updatePlantSuccess(plantId))
    .then(() => onIndexPlants(event))
    // .then(ui.indexPlantsSuccess(formData))
    // .then(api.indexPlants(formData))
    .catch(ui.updatePlantFailure)
}

module.exports = {
  onCreatePlant,
  onIndexPlants,
  onDestroyPlant,
  onUpdatePlant
}
