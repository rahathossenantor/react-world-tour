import { useEffect, useState } from 'react'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
    </>
  )
}

export default App
