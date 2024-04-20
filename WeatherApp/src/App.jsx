import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
 const [search , setSearch] = useState('');
 const [result , setResult] = useState([]);
const handleSearch = (e) => {
  setSearch(e.target.value);
}

useEffect(() => {
  axios.get('https://localhost:7089/api/Products')
    .then(response => {
      setResult(response.data);     
    })
    .catch(error => {
      console.error(error);
    });
}, []);



  return (
    <>
      <div className='container' value={search} onChange={handleSearch}>
          <input type="text" /> 
          <button>Search</button>
      </div>
    </>
  )
}

export default App
