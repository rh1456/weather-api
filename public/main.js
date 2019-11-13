const getWeather = async () => {
  const place = document.querySelector('.zip').value
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      place +
      '&appid=658ce6b7e5a6aba1b49ed129b567beba&units=imperial'
  )
  const weatherData = await response.json()
  displayData(
    weatherData.main.temp +
      ' Degrees and ' +
      weatherData.weather[0].main +
      ' with a high of ' +
      weatherData.main.temp_max +
      ' and a low of ' +
      weatherData.main.temp_min
  )
  if (weatherData.main.temp > 80) {
    document.querySelector('.description').textContent = 'WOW HOT!'
  } else if (weatherData.main.temp < 80 && weatherData.main.temp > 40) {
    document.querySelector('.description').textContent = 'Not so bad'
  } else if (weatherData.main.temp < 40) {
    document.querySelector('.description').textContent = 'Put a Coat On!'
  }
}

const displayData = weatherData => {
  document.querySelector('.info').textContent = weatherData
}

document.querySelector('.search').addEventListener('click', getWeather)
