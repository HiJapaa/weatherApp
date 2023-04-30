const container = document.querySelector('.container')
const searchButton = document.querySelector('.search-box button')
const serchInput = document.querySelector('.search-box input')
const weatherBox = document.querySelector('.weather-box')
const weatherDeatils = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')
const image = document.querySelector('.weather-box img')
const temperature = document.querySelector('.weather-box .temperature')
const description = document.querySelector('.weather-box .description')
const humidity = document.querySelector('.weather-details .humidity span')
const wind = document.querySelector('.weather-details .wind span')

export { container, searchButton, serchInput, weatherBox, weatherDeatils, error404, image, temperature, description, humidity, wind }