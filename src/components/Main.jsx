import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchCoin, fetchCoinInfo } from '../api';
import Loading from '../Loding';
import CoinList from './CoinList';
import './Main.css'

const Main = () => {
    const [coinId, setCoinId] = useState()
    const [clickData, setClickData] = useState()
    const [clickToggle, setClickToggle] = useState(false)

    const [coinClickId , setCoinClickId] = useState()

    useEffect(()=>{
        fetchCoin().then(res=>setCoinId(res))
    },[])

    const coinClick = (data) => {
        setClickToggle(true)
        fetchCoinInfo(data).then(res=>setClickData(res))
        setCoinClickId(data)
    }
    return (
        <div className='coinContainer'>
            <header>
                <h1>COINS</h1>
            </header>
            <ul>
                { 
                    clickToggle === false  ?
                        coinId  !== undefined ? 
                        coinId?.data?.slice(0,100).map(data=>
                            <li key={data.id} onClick={() => coinClick(data.id)} className="coinList">
                                <a>
                                    <img
                                    src={`https://coinicons-api.vercel.app/api/icon/${data.symbol.toLowerCase()}`}
                                    className="coinImage"
                                    />
                                    {data.name} -
                                </a>
                            </li>)
                        :
                            <Loading></Loading>
                        :
                            <CoinList data={clickData} setClickToggle={setClickToggle} coinClickId={coinClickId}></CoinList>
                }

            </ul>
        </div>
    );
};

export default Main;