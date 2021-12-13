import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Country.css';

const Cart = (props) => {
    const {name,population,flags,region} = props.country;
    const CountryClick = props.CountryClick;


    const styleCountry = {
        border: '3px solid red',
        width: '500px',
        height:'370px',
        margin: '5px',
        borderRadius: '1000px',
        backgroundColor: 'lightGray',
    }

    const buttonStyle = {
        backgroundColor:'gold', borderColor:'white', width:'150px', height:'40px'

    }
    return (
        <div className="card-container">
            <div style={styleCountry}>
            <h1>Name: {name.common}</h1> 
            <img className="flag" src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p><small>Region: {region}</small></p>
            <button style={buttonStyle} onClick={() => CountryClick(props.country)}><FontAwesomeIcon icon={faPlusSquare} /> Click Me</button>

        </div>
        </div>
    );
};

export default Cart;