import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CoinList from './components/CoinList';
import Main from './components/Main';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:coinId" element={<CoinList/>}>
                    {/* <Route path="chart" element={<Chart/>} />
                    <Route path="price" element={<Price/>} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;