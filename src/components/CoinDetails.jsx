import React,{useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import {server} from '../index.js';
import Loader from './Loader.jsx';
import Chart from "./Chart";
import {Modal} from 'antd';
//import { useRef } from 'react';
//import Draggable from 'react-draggable';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Col, Row,Statistic } from 'antd';

import '../styles/coindetails.css';

const CoinDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    


    const params = useParams();
    const [coin,setCoin] = useState({});
    const [loading,setLoading] = useState(true);
    const [days,setDays] = useState("24h");
    const [chartArray,setChartArray] = useState([]);

    const btns = ["24h" , "7d" , "14d" , "30d" , "60d" , "200d" , "1y" , "max"];

    const switchChartStats = (key) => {
        switch (key) {
          case "24h":
            setDays("24h");
            setLoading(true);
            break;
          case "7d":
            setDays("7d");
            setLoading(true);
            break;
          case "14d":
            setDays("14d");
            setLoading(true);
            break;
          case "30d":
            setDays("30d");
            setLoading(true);
            break;
          case "60d":
            setDays("60d");
            setLoading(true);
            break;
          case "200d":
            setDays("200d");
            setLoading(true);
            break;
          case "1y":
            setDays("365d");
            setLoading(true);
            break;
          case "max":
            setDays("max");
            setLoading(true);
            break;
    
          default:
            setDays("24h");
            setLoading(true);
            break;
        }
      };
    

    useEffect(() => {
        const fetchCoin = async () => {
        const {data} = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
            `${server}/coins/${params.id}/market_chart?vs_currency=inr&days=${days}`
          );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      }  
      fetchCoin();
    },[params.id,days]);

    return(
        <div className='coin-details-container'>
        {
            loading ? ( <Loader /> ) : (
                <>
                    <div className="chart-container">
                        <Chart arr={chartArray} days={days} />
                        <div className="btn-array">
                            {
                                btns.map((i) => (
                                    <button className='btn-array-element' type="text" onClick={()=> switchChartStats(i)} >{i}</button>
                                ))
                            }
                        </div>
                        <p>Last Updated on {" "} {Date(coin.market_data.last_updated).split("G")[0]}</p>
                        <button className='modal-button-one' onClick={showModal}>More Details</button>
                        <div className="modal-container">
                            <Modal className='modal-card' title={coin.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} bodyStyle={{fontWeight:"normal"}}>
                                {/* <img src={coin.image.large} alt={coin.name} /> */}
                                {
                                    coin.market_data.price_change_percentage_24h > 0 ? 
                                    ( <Statistic 
                                        title=""
                                        value={coin.market_data.price_change_percentage_24h}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                      /> ) : 
                                    ( <Statistic
                                        title=""
                                        value={coin.market_data.price_change_percentage_24h}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                      /> ) 
                                }
                                <Row gutter={16}>
                                    {/* <Col span={12}>
                                    <Statistic title="Max Supply" value={coin.market_data.max_supply} />
                                    </Col> */}
                                    <Col span={12}>
                                    <Statistic title="Circulating Supply" value={coin.market_data.circulating_supply} />
                                    </Col>
                                    <Col span={12}>
                                    <Statistic title="Market Cap" value={`₹${coin.market_data.market_cap["inr"]}`} />
                                    </Col>
                                    <Col span={12}>
                                    <Statistic valueStyle={{ color:"#cf1322" }} title="All Time Low" value={`₹${coin.market_data.atl["inr"]}`} />
                                    </Col>
                                    <Col span={12}>
                                    <Statistic valueStyle={{ color: '#3f8600' }} title="All Time High" value={`₹${coin.market_data.ath["inr"]}`} />
                                    </Col>
                                </Row>
                            </Modal>
                        </div>
                    </div>


                    {/* <div className="coin-about-conatiner">

                       <img src={coin.image.large} alt={coin.name} />
 
                        <p>{coin.name}</p>

                        <p>{"₹"}{coin.market_data.current_price["inr"]}</p>

                        {/* {
                            coin.market_data.price_change_percentage_24h > 0 ? 
                            ( <p><i class="arrow-up"></i></p> ) : 
                            ( <p><i class="arrow-down"></i></p> ) 
                        }

                        <p>{coin.market_data.price_change_percentage_24h}%</p> */}


                </>
            )
        }
        </div>
    );
};

export default CoinDetails;