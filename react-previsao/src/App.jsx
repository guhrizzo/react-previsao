import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/Weatherinformations/WeatherInformations'
import WeatherInformations5Days from './components/Weatherinformations5days/WeatherInformations5days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const inputRef = useRef()



  async function searchCity() {

    const city = inputRef.current.value
    const key = "086413db9f506c3d29d7e37eeab864d2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo5Days = await axios.get(url5Days)
    setWeather5days(apiInfo5Days.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <div className='group'>
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" /></g></svg>
        <input ref={inputRef} type="text" name="input-weather" id="input-Weather" placeholder='Digite a cidade...' />
        <button onClick={searchCity} className='btn-search'>Buscar</button>


      </div>
      <WeatherInformations weather={weather} />
      {weather5days && <WeatherInformations5Days weather5days={weather5days} />}
    </div>
  )
}

export default App
