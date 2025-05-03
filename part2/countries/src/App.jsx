import { useEffect, useState } from 'react'
import { Countries } from './Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("");
  let filteredCountries = [];
  if(search.length>0){
    filteredCountries = countries.filter(country => country.name.common.toLowerCase().startsWith(search.toLowerCase()));
  }

  useEffect(() => {
    fetch(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])
  

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
    <>
      <h1>NOT COMPLETED</h1>
      <label style={{marginRight:"5px"}} htmlFor="country">find countries</label><input onChange={handleChange} type="text" name="" id="" value={search} />
      {
        filteredCountries.length>10 
        ? 
        <p>Too many matches, specify another filter</p>
        :
        <Countries countries={filteredCountries} /> 
      }
    </>
  )
}

export default App
