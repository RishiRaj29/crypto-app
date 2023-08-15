import React from 'react';

import '../styles/about.css';
import {GithubOutlined , LinkedinOutlined,InstagramOutlined} from '@ant-design/icons';
import { Card } from 'antd';
const gridStyle = {
  width: '100%',
  textAlign: 'center',
};

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <div className='about-left-container'>
                    <h3>Hi, I'm</h3>
                    <h1>Rishi Raj</h1>
                </div>
                <div className="about-right-container">
                    <div className="circle"></div>
                </div>
            </div>
            <div className="about-card">
                <Card title="Connect with me">
                    <Card.Grid className='card-grid' hoverable={false} style={gridStyle}>
                        <GithubOutlined className='github' style={{fontSize:'50px'}}/><LinkedinOutlined className='github' style={{fontSize:'50px'}}/><InstagramOutlined className='github' style={{fontSize:'50px'}}/>
                    </Card.Grid>
                </Card>
            </div>
        </div>
    );
};

export default About;