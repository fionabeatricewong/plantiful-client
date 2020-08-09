// Require:
const config = require('../config')
const store = require('../store')

// AJAX Functions:

const createPlant = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/plants',
    method: 'POST',
    // created plant belongs to signed-in user
    user: store.user,
    data: formData
  })
}

const indexPlants = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/plants',
    method: 'GET',
    data: {
      plant: []
    }
  })
}

const destroyPlant = function (plantId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/plants/' + plantId,
    method: 'DELETE'
  })
}

const updatePlant = function (plantId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/plants/' + plantId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  createPlant,
  indexPlants,
  destroyPlant,
  updatePlant
}
