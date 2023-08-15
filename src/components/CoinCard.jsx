import React from 'react';
import {Link} from "react-router-dom";

import '../styles/coincard.css';

const CoinCard = ({id,name,img,symbol,price,currencySymbol}) => {
    return (
        <Link to={`/coin/${id}`}>
            <div className='card'>
                <img src={img} alt={name} />
                <h2>{symbol}</h2>
                <p className='p-name'>{name}</p>
                <p className='p-price'>{price ? `${currencySymbol}${price}` : "N/A"}</p>
            </div>
        </Link>
    );
};

export default CoinCard;