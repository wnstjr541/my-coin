import axios from 'axios';

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoin(){
  return await axios.get(`${BASE_URL}/coins`)
    // return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo(coinId) {
  if(coinId){
    return await axios.get(`${BASE_URL}/coins/${coinId}`)
  }
}

export async function fetchCoinTickers(coinId) {
  return await axios.get(`${BASE_URL}/tickers/${coinId}`)
}

export async function fetchohlcv(coinId){
  const reponse=await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`);
  const json=await reponse.json();  
  return Array.isArray(json) ? json : undefined;
}
