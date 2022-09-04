import React, { useEffect, useState } from 'react';
import Loading from '../Loding';
import { fetchCoinTickers, fetchohlcv } from '../api';
import Chart from './Chart';
import './CoinList.css'
import { IoIosArrowBack } from "react-icons/io";

const CoinList = ({data , setClickToggle , coinClickId}) => {

    const [chartData, setChartData] = useState()
    const [chartToggle, setChartToggle] = useState()
    const [supply, setSupply] = useState()

    const backButton = () => {
        setClickToggle(false)
    }

    const chartToggleBtn = () => {
        setChartToggle(!chartToggle)
    }

    useEffect(()=>{
        fetchohlcv(coinClickId).then(res => setChartData(res?.data)).catch(err=>console.log(err))
        fetchCoinTickers(coinClickId).then(res=> setSupply(res?.data))
    },[coinClickId , chartToggle])

    return (
        <>
        
            {supply !== undefined ? 
                <div className="Container">
                    <button onClick={backButton} className="backIcon"><IoIosArrowBack/></button>
                    <title>
                        {data?.data?.name}
                    </title>
                    <header className="Header">
                        <h1 className='Title'>
                            {data?.data?.name}
                        </h1>
                    </header>
                    <>
                        <div className="Overview">
                            <div className="OverviewItem">
                            <span>Rank:</span>
                            <span>{data?.data?.rank}</span>
                            </div>
                            <div className= "OverviewItem">
                            <span>Symbol:</span>
                            <span>${data?.data?.symbol}</span>
                            </div>
                            <div className= "OverviewItem">
                            <span>Price:</span>
                            <span>{supply?.quotes.USD.price.toFixed(0)}</span>
                            </div>
                        </div>
                        <p className="Description">{data?.data?.description}</p>
                        <div className="Overview">
                            <div className= "OverviewItem">
                                <span>Total Suply:</span>
                                <span>{supply?.total_supply}</span>
                            </div>
                            <div className= "OverviewItem">
                                <span>Max Supply:</span>
                                <span>{supply?.max_supply}</span>
                            </div>
                        </div>
                        <div className="Overview">
                            <div className= "OverviewItem">
                                <span>ATH PRICE:</span>
                                <span>{supply?.quotes.USD?.ath_price.toFixed(0)}</span>
                            </div>
                            <div className= "OverviewItem">
                                <span>24 CHANGE:</span>
                                <span>{supply?.quotes.USD?.volume_24h_change_24h}%</span>
                            </div>
                        </div>
                        <div className="Tabs">
                            <span className="Tab" onClick={chartToggleBtn}>
                                차트
                            </span>
                        </div>
                        {chartToggle === true &&
                            <Chart chartData={chartData}></Chart>
                        }
                    </>
                </div> 
                : 
                <Loading></Loading>
            }
        </>
    );
};

export default CoinList;