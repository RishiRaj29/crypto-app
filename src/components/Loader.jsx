import React from 'react';
import {Spin} from 'antd';

import '../styles/loader.css';

const Loader = () => {
    return (
        <div className='loader-container'>
            <Spin size="large" colorPrimary="#fff"/>
        </div>
    );
};

export default Loader;