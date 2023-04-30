import { container, searchButton, serchInput, weatherBox, weatherDeatils, error404, image, temperature, description, humidity, wind } from './variables.js'

serchInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        const APIKey = '32acbe8c392f987cd588a882e312fcbc'
        const city = document.querySelector('.search-box input').value

        if (city === '') {
            alert('Please type a location')
            return
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    container.style.height = '400px'
                    weatherBox.style.display = 'none'
                    weatherDeatils.style.display = 'none'
                    error404.style.display = 'block'
                    error404.classList.add('fadeIn')
                    return
                }

                error404.style.display = 'none'
                error404.classList.remove('fadeIn')

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = '../src/img/clear.png'
                        break
                    case 'Rain':
                        image.src = '../src/img/rain.png'
                        break
                    case 'Snow':
                        image.src = '../src/img/snow.png'
                        break
                    case 'Clouds':
                        image.src = '../src/img/cloud.png'
                        break
                    case 'Haze':
                        image.src = '../src/img/wind.png'
                        break

                    default:
                        image.src = ''
                }

                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
                description.innerHTML = `${json.weather[0].description}`
                humidity.innerHTML = `${json.main.humidity}%`
                wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

                weatherBox.style.display = ''
                weatherDeatils.style.display = ''
                weatherBox.classList.add('fadeIn')
                weatherDeatils.classList.add('fadeIn')
                container.style.height = '590px'
            })
    }
})

searchButton.addEventListener('click', () => {
    const APIKey = '32acbe8c392f987cd588a882e312fcbc'
    const city = document.querySelector('.search-box input').value

    if (city === '') {
        alert('Please type a location')
        return
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px'
                weatherBox.style.display = 'none'
                weatherDeatils.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn')
                return
            }

            error404.style.display = 'none'
            error404.classList.remove('fadeIn')

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '../src/img/clear.png'
                    break
                case 'Rain':
                    image.src = '../src/img/rain.png'
                    break
                case 'Snow':
                    image.src = '../src/img/snow.png'
                    break
                case 'Clouds':
                    image.src = '../src/img/cloud.png'
                    break
                case 'Haze':
                    image.src = '../src/img/wind.png'
                    break

                default:
                    image.src = ''
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
            description.innerHTML = `${json.weather[0].description}`
            humidity.innerHTML = `${json.main.humidity}%`
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

            weatherBox.style.display = ''
            weatherDeatils.style.display = ''
            weatherBox.classList.add('fadeIn')
            weatherDeatils.classList.add('fadeIn')
            container.style.height = '590px'
        })
})
