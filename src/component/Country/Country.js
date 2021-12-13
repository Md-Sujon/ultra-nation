import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {name,population,flags,region} = props.country;
    const CountryClick = props.CountryClick;


    const styleCountry = {
        border: '3px solid red',
        height:'450px',
        margin: '5px',
        borderRadius: '1000px',
        backgroundColor: 'lightGray'
    }

    const buttonStyle = {
        backgroundColor:'gold', borderColor:'white', width:'150px', height:'40px'

    }
    return (
        <div style={styleCountry}>
            <h1>Name: {name.common}</h1> 
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p><small>Region: {region}</small></p>
            <button style={buttonStyle} onClick={() => CountryClick(props.country)}><FontAwesomeIcon icon={faPlusSquare} /> Click Me</button>
           
            
        </div>
    );
};

export default Cart;