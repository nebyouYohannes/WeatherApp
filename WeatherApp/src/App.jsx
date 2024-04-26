import { useState, useEffect } from 'react'
import clouds from './assets/cloudy.png'
import snow from './assets/snow.png'
import drizzle from './assets/drizzle.png'
import clear from './assets/sun.png'
import storm from './assets/storm.png'
import rain from './assets/rain.png'

import './App.css'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState({});

  const handleSearch = () => {
    if (search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b1fd6e14799699504191b6bdbcadfc35&units=metric`)
        .then(response => {
          setResult(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  return (
    <>
      <div className='container'>
        <input className='inputcity' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>aa</button>
      
      <div>
      {result.main && (
              <>
              <div className='info'>
              <h1>{result.name}</h1>
              { result.weather[0].main === 'Clouds' ? (
                <img src={clouds} alt="" />
              ): result.weather[0].main === 'Thunderstorm' ?(
                <img src={storm} ></img>
              ) : result.weather[0].main === 'Drizzle' ?(
                <img src={drizzle} alt="" />
              ): result.weather[0].main === 'Rain' ?(
                <img src={rain} alt="" />
              ): result.weather[0].main === 'Snow' ?(
                <img src={snow} alt="" />
              ): result.weather[0].main === 'Clear' ?(
                <img src={clear} alt="" />
              ): result.weather[0].main === 'Atmosphere' ?(
                <img src={clouds} alt="" />
              ): null}
              <h1>{result.main.temp} °</h1>
              
              <h2>{result.main.temp_min} {result.main.temp_max}</h2>
              <h2>{result.weather[0].description}</h2>
              

             

              </div>
              

              </>
              
              
              
      )}
      </div>
      </div>
    </>
  )
}

export default App
