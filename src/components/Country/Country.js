import React from 'react';
import './Country.css';

const Country = (props) => {

    const {area ,region,name,capital,flags} =props.country ;
    
    return (
        <div className='country'>
            <h1>Country Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <h1>Area : {area}</h1>
            <h1>Region : {region}</h1>
            <h1>Capital : {capital}</h1>
           
        </div>
    );
};

export default Country;