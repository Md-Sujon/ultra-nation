import React from 'react';

const Cart = (props) => {
    console.log(props.singleCountry);
    const cart = props.singleCountry;
    console.log(cart);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     total = total + country.population;
    // }
const totalpopulation = cart.reduce((i, country) => i + country.population,0);

// const TotalAll = cart.reduce((total, country) => total+ country.name+"_"+country.capital);
let TotalAll = " ";
for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    TotalAll = TotalAll + " Country name: " + country.name.common+" Capital: "+country.capital;
}

    return (
        <div>
            <ul>
                <li>{TotalAll}</li>
            </ul>
            <h6>Total Population: {totalpopulation}</h6>
            <h1>{cart.population}</h1>
           {/* <h2>Name: {cart.name.common}</h2>  */}
        </div>
    );
};

export default Cart;