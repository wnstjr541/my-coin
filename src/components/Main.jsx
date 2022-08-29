import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Main = () => {
    const BASE_URL = `https://api.coinpaprika.com/v1`;
    const [coinId, setCoinId] = useState()

    useEffect(()=>{
        axios.get(`${BASE_URL}/coins`).then(res=>setCoinId(res))
    },[])

    return (
        <div>
            <ul>
                {
                    coinId && coinId?.data?.slice(0,100).map(data=>
                    <li>
                        <a href={`/${data.id}`} state={{name:data.id}}>
                            <img
                            src={`https://coinicons-api.vercel.app/api/icon/${data.symbol.toLowerCase()}`}
                            />
                            {data.name};
                        </a>
                    </li>)
                }
                {/* {test?.map(data => <li>{data.name}</li>)} */}
            </ul>
        </div>
    );
};

export default Main;