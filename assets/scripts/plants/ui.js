'use strict'

// Require:
const showPlantsTemplate = require('../templates/plant-collection.handlebars')
// const store = require('../store')

const indexPlantsSuccess = (data) => {
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })

  // if no plants in collection:
  // if (data.plants.length === 0) {
  //   $('#message').text('no plants in your collection yet!')
  // } else {
  //   $('#message').text('look at all your plant babies! you\'re kale-ing it!')
  // }

  // Hide "outdated" plant collection:
  $('#content').empty()
  $('#content').append(showPlantsHtml)
  $('#content').show()
}

const indexPlantsSuccessMessages = () => {
  // if no plants in collection:
  // if (data.plants.length === 0) {
  //   $('#message').text('no plants in your collection yet!')
  // } else {
  $('#message').text('look at all your plant babies! you\'re kale-ing it!')
}
// }

const indexPlantsFailure = () => {
  $('#message').text('couldn\'t show all plants. lettuce try again.')
}

const createPlantSuccess = (data) => {
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })

  $('#message').text('aloe-lujah! new plant in collection!')
  $('#content').append(showPlantsHtml)
  // "refresh" and show content/index:
  //

  $('form').trigger('reset')
}

const createPlantFailure = () => {
  $('#message').text('couldn\'t add new plant! don\'t stop beleafing!')
}

const destroyPlantSuccess = () => {
  $('#message').text('bye fleafa!')
  // $('#content').hide()
  // $('#content').show()
}

const destroyPlantFailure = () => {
  $('#message').text('still here! can\'t leaf me that easily!')
}

const updatePlantSuccess = (plantId) => {
  $('#message').text('plant updated! you grow girl!')

  $(`#updatePlant-${plantId}`).modal('hide')
  // Removing show class triggers fade out transition
  $('.modal-backdrop').removeClass('show')
  return new Promise(resolve => setTimeout(() => {
    $('.modal-backdrop').remove()
    resolve()
  }, 150))
}

const updatePlantFailure = () => {
  $('#message').text('plant not updated! succ it up and try again.')
}

module.exports = {
  createPlantSuccess,
  createPlantFailure,
  indexPlantsSuccess,
  indexPlantsSuccessMessages,
  indexPlantsFailure,
  destroyPlantSuccess,
  destroyPlantFailure,
  updatePlantSuccess,
  updatePlantFailure
}
