import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState([])

  const dividedCounty = country.slice(0,20);
          console.log(dividedCounty);

   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountry(data)
      })
      .catch(error =>console.log(error))
   }, [])


  return (
    <div>
      <h1>Hello</h1>
      <ul>
      {
        dividedCounty.map(country => <li>{country.name.common}</li>)
      }
      </ul>
      
    </div>
  );
}

export default App;
