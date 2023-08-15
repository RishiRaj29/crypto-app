import React from 'react';
import { Link } from "react-router-dom";

import { Button } from 'antd';
import '../styles/header.css';

const Header = () => {
    return (
       <div className='header-container'>
        <div className='header-content'>
            <Button className='header-btn' type="link"><Link to="/"><span>Home</span></Link></Button>
            <Button className='header-btn' type="link"><Link to="/coins"><span>Coins</span></Link></Button>
            <Button className='header-btn' type="link"><Link to="/about"><span>About Me</span></Link></Button>
        </div>
       </div>
    );
};

export default Header;