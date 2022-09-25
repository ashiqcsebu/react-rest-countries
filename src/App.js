// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
        <Countries></Countries>
  
    </div>
  );
}


// function LoadCountries(){
//   const [countries , setCountries] = useState([]);
//   useEffect(()=> {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=> res.json())
//     .then(data=> setCountries(data))


//   },[])
//  return (
//       <div>
//          <h1>Country List</h1>
//          <h1>Total Country :{countries.length}</h1>
//          {
//           countries.map(country =><Country name={country.name.common} official={country.name.official}></Country>)
//          }
//       </div>
//  )
// }

// function Country(props){

//   return (
//     <div>
//       <h2>Name : {props.name}</h2>
//       <h2>Official Name : {props.official}</h2>
//     </div>
//   )
// }

export default App;
