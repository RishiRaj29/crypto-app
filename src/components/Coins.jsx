import React,{ useState } from 'react';
import axios from "axios";
import {server} from '../index.js';
import Loader from '../components/Loader.jsx';
import CoinCard from '../components/CoinCard.jsx';

import '../styles/coins.css';
import { useEffect } from 'react';


const Coins = () => {

    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const {data} = await axios.get(`${server}/coins/markets?vs_currency=inr`);
                //console.log(data);
                setCoins(data);
                setLoading(false);
            } catch (error) {}
        };
        fetchCoins();
    },[]);

    return (
        <>
            {
                loading ? ( <Loader /> ) : 
                (
                    <div className='coins-container'>
                        {
                            coins.map((i) => (
                                <CoinCard id={i.id} key={i.id} name={i.name} price={i.current_price} img={i.image} symbol={i.symbol} currencySymbol={'₹'}/>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default Coins;