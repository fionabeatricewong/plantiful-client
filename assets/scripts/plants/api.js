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

// const signIn = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-in',
//     method: 'POST',
//     data: formData
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE'
//   })
// }
//
// const changePassword = function (formData) {
//   return $.ajax({
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     data: formData
//   })
// }
//
module.exports = {
  createPlant,
  indexPlants,
  destroyPlant
}
