'use strict'

// Require:
const showPlantsTemplate = require('../templates/plant-collection.handlebars')
// const store = require('../store')

const createPlantSuccess = (data) => {
  console.log(`hi ${data.plants}`)
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })
  $('.content').append(showPlantsHtml)

  $('#message').text('new plant added to your collection!')

  $('form').trigger('reset')
}

const createPlantFailure = () => {
  $('#message').text('couldn\'t add new plant!')
}

const indexPlantsSuccess = (data) => {
  const showPlantsHtml = showPlantsTemplate({ plants: data.plants })
  $('.content').append(showPlantsHtml)
  $('#message').text('look at all your plant babies!')
}

const indexPlantsFailure = () => {
  $('#message').text('couldn\'t show all plants')
}

module.exports = {
  createPlantSuccess,
  createPlantFailure,
  indexPlantsSuccess,
  indexPlantsFailure
}
