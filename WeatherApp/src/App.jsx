import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
      {result.main && (
              <>
              <h1>{result.name}</h1>
              <h1>{result.main.temp} °</h1>
              <h2>{result.main.temp_min} {result.main.temp_max}</h2>
              <h2>{result.weather[0].description}</h2>
              
              </>
              
              
      )}
      </div>
    </>
  )
}

export default App
