import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    let newCountry = props.cart;

    // let total = 0;
    // let totalPopolation =newCountry.reduce((totalPopolation, country)=>totalPopolation+country.population, 0)
    // for (let i = 0; i < newCountry.length; i++) {
    //     const country = newCountry[i];
    //     total = country + country.population;
    // }
    return (
        <div>
            <h1>{newCountry.population}</h1>
           <h2>Name: {props.cart.name.common}</h2> 
        </div>
    );
};

export default Cart;