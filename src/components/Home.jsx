import React from 'react';

import '../styles/home.css';
import { Button } from 'antd';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-content">
                <span className="home-heading-content">
                    <h1 style={{color:'#fcfcfc'}}>Keep track of your favourite<br />Crypto Coins</h1>
                    <h6 style={{color:'#fcfcfc'}}>Here you can learn and track your favourite Cryptocurrencies</h6>
                </span>
                <Button className='home-btn'><span>Let's get started !</span></Button>
            </div>
        </div>
    );
};

export default Home;