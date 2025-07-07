import './WeatherInformations5days.css'

function WeatherInformations5Days({ weather5days }) {
  let dailyForecast = {}

  for (let forecast of weather5days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(0, 5)

  function convertDate(date) {
    return new Date(date.dt * 1000).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit'
    })
  }

  return (
    <div className='weather5day-container'>
      <h3>Previsão para os próximos 5 dias</h3>
      <div className='weather-list'>
        {nextFiveDays.map(forecast => (
          <div className='weather-item' key={forecast.dt}>
            <p>{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt='icon'
            />
            <p>{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{' '}
              {Math.round(forecast.main.temp_max)}°C máx
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherInformations5Days
