
import React from 'react';
import {Link} from "react-router-dom";
import news from "../img/news.png";
import weather from "../img/weather.png";
import bitcoin from "../img/bitcoin.jpg";


const Home = () => {
    return (
        <header className="App-header">
            {/*<h2>Total Page visits: {counter}</h2>*/}
            {/*{isVisible && <h1>Here is my component</h1>}*/}
            {/*<button onClick={() => setIsVisible(!isVisible)}>Click Me</button>*/}
            <h2>The A team project</h2>
            <div className="eachpage"><img src={news}/> <p>See <Link to = "/wakkihaya">wakkihaya</Link> page</p></div>
            <div className="eachpage"><img src={weather}/> <p>See <Link to ="/dibs">dibs</Link> page </p></div>
            <div className="eachpage"><img src={bitcoin}/> <p>See <Link to="/pramish">pramish</Link> page </p></div>
        </header>
    );
};

export default Home;

