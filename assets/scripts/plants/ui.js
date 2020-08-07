'use strict'

// Require:
const showPlantsTemplate = require('../templates/plant-collection.handlebars')
// const store = require('../store')

const indexPlantsSuccess = (data) => {
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })
  // if no plants in collection:
  // if (plants === '') {
  //   $('#message').text('no plants in your collection yet!')
  // } else {
  $('#message').text('look at all your plant babies!')
  // Hide "outdated" plant collection:
  $('#content').empty()
  $('#content').append(showPlantsHtml)
  $('#content').show()
}
// }

const indexPlantsFailure = () => {
  $('#message').text('couldn\'t show all plants')
}

const createPlantSuccess = (data) => {
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })

  $('#message').text('new plant added to your collection!')
  $('#content').append(showPlantsHtml)
  // "refresh" and show content/index:
  //

  $('form').trigger('reset')
}

const createPlantFailure = () => {
  $('#message').text('couldn\'t add new plant!')
}

const destroyPlantSuccess = () => {
  $('#message').text('bye plant!')
  // $('#content').hide()
  // $('#content').show()
}

const destroyPlantFailure = () => {
  $('#message').text('still here!')
}

module.exports = {
  createPlantSuccess,
  createPlantFailure,
  indexPlantsSuccess,
  indexPlantsFailure,
  destroyPlantSuccess,
  destroyPlantFailure
}
