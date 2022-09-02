import React from 'react';
import ReactLoading from 'react-loading';
import "./Loding.css"

const Loding = () => (
    <div className='loadingContainer'>
      <ReactLoading type={"cylon"} color={"skyblue"} height={667} width={375} />
    </div>
);

export default Loding;