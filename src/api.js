import axios from 'axios';

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoin(){
  return await axios.get(`${BASE_URL}/coins`)
}

export async function fetchCoinInfo(coinId) {
  if(coinId){
    return await axios.get(`${BASE_URL}/coins/${coinId}`)
  }
}

export async function fetchCoinTickers(coinId) {
  if(coinId){
    return await axios.get(`${BASE_URL}/tickers/${coinId}`)
  }
}

export async function fetchohlcv(coinId){
  if(coinId){  
    return await axios.get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`);
  }
}
