
import React,{Component} from 'react';
import logo from './logo.svg';
import bitcoin from './img/bitcoin.jpg'
import news from './img/news.png'
import weather from './img/weather.png'
import './App.css';
import axios from 'axios';
// import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Route} from "react-router-dom";

import Pramish from './pages/pramish'
import wakkihaya from './pages/wakkihaya'
import Home from './pages/Home'
import Weatherpage from './pages/Dibs/Dibs'


const App = () => {
  // let isShown = false;
  console.log('I am rendering');
  const [isVisible, setIsVisible] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  // arg 1 is a callback, 2 is an array
  React.useEffect(() => {
    // this runs after the first render call
    console.log('First render');
    axios.get('/api/getCounter')
      .then(res => setCounter(res.data.counter))
      .catch(console.log);
  }, [isVisible]); // if empty only gets called 1 time after first render

  return (
    <div className="App">

        <BrowserRouter>
          <Route path="/" exact component={Home} />
            <Route path="/dibs" component={Weatherpage} />  
            <Route path="/wakkihaya" component={wakkihaya} />   
            <Route path="/pramish" component={Pramish} />   
      </BrowserRouter>
    </div>

  );
}

export default App;
