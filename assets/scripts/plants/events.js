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
    // pass in true to show createSuccess message
    .then(() => onIndexPlants(event, true))
    .catch(ui.createPlantFailure)
}

// GET/INDEX (see all plants)
// pass in hideMessage as argument so create/update/destroy messages show
const onIndexPlants = function (event, hideMessage) {
  event.preventDefault()

  api.indexPlants()
    .then((res) => ui.indexPlantsSuccess(res, hideMessage))
    .catch(ui.indexPlantsFailure)
}

// DESTROY (remove selected plant)
const onDestroyPlant = function (event) {
  event.preventDefault()

  // get id for plant who's remove button was clicked
  const plantId = $(event.target).data('id')
  // console.log('this is plantId:' + plantId)
  api.destroyPlant(plantId)
    .then(ui.destroyPlantSuccess)
    // pass in true to show destroySuccess message
    .then(() => onIndexPlants(event, true))
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
    // pass in true to show updateSuccess message
    .then(() => onIndexPlants(event, true))
    .catch(ui.updatePlantFailure)
}

module.exports = {
  onCreatePlant,
  onIndexPlants,
  onDestroyPlant,
  onUpdatePlant
}
