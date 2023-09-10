import { useEffect, useState } from 'react'
import "./App.css"
import Country from './components/country/Country'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <>
    <h1>React Rest Countries</h1>
    <h3>Total countries: {countries.length}</h3>

    <div>
      {countries.slice(0, 20).map((country, index) => <Country country={country} key={index}></Country>)}
    </div>
    </>
  )
}

export default App
