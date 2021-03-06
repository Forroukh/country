import React from 'react';

const Country = (props) => {
    // console.log(props.country)
    const {name, population, region, flag} = props.country;
    const flagStyle = {
        height: '50px'
    }
    const countryStyle ={
        border: '1px solid red',
        margin: '10px',
        padding:'10px'
    }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style ={countryStyle}>
            <h1> This is {name} </h1>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Populatio:{population} </p>
            <p>Region: {region} </p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;