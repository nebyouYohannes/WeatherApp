import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
    if (search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b1fd6e14799699504191b6bdbcadfc35&units=metric`)
        .then(response => {
          setResult(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [search]);
  

  return (
    <>
      <div className='container'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSearch(search)} >Search</button>
      </div>
      <div>
        <table>
          <tr>
            <td>{ result.main.humidity}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
