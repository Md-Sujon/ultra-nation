import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {
  const [country, setCountry] = useState([])
  const [singleCountry, setSingleCountry] = useState([]);
      
  const dividedCounty = country.slice(0,250);


          const CountryClick = (country) =>{
            const newCountry = [...singleCountry, country]
            setSingleCountry(newCountry)
          }

   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountry(data)
      })
      .catch(error =>console.log(error))
   }, [])


   

  return (
    <div className="App">
      <h1>Hello</h1>
      <h3>Total Country: {dividedCounty.length}</h3>
     
      <Cart singleCountry={singleCountry}></Cart>
      <div>
        <h3>New Country Added: {singleCountry.length}</h3>
       
      </div>
      {
        dividedCounty.map(country => <Country 
          country={country}
          CountryClick ={CountryClick} 
          // key={country.population}
          ></Country>)
          
      }
      
    </div>
  );
}

export default App;
