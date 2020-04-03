// the purpose of react is to have multiple files taht contain the UI code and then you import
// to one single file and that file gets exploited into the main index.html and then index.html is seen on screen

import React from "react";
import { Link } from "react-router-dom";

import Titles from "./Title";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "1279ffd25baeacac08b1096bea207238";
                                                    // when you make an api call, it will get associated with your email and then when you make the call, the webiste will know who you are
                                                    // and what kind of data are you trying to access via your api keys
class WeatherPage extends React.Component {   //this is creating an instanceof WeatherPage which is extending React.component
                                     // React.component is an object that lives somewhere in node modules 
  state = {                // state is an object it contains key value pairs  
    temperature: undefined,  // initial state of the temperature, it's only gonna change once we press buttton
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {  // this function is bound to App component
    e.preventDefault();        // It is going to prevent the default that is refreshing the page, it represents single page application
    const city = e.target.elements.city.value; //
    const country = e.target.elements.country.value; //
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`); // template string allow you to inject variables that you defined
                                        // makes to the call to his url
    const data = await api_call.json();// javascript object notation: converts data from the api to readable form that any programming language can understand
    if (city && country) {           // If city and country are not empty, the if statement becomes true and execute s the statement below
      this.setState({                // don't directly manipulate the states ('this.state.temperature= something;)
                                     // builtin method called setState, within that you can define state value
        temperature: data.main.temp,  // to access anything we have to start with data,then main (from console), then temp (from console)
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
 
  render() {// rendermethod displays the data that is going to inside React.component, everything in here gets displayed in the screen
    return ( // it returns JSX, not html, its javascript code running in background
             // React and , work to covert html into Javascript     
      <div>   
        <div className="wrapper"> 
          <div className="main">
            <div className="container">
              <div className="row">
              <Link to="/"> Home </Link>
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />    
                  <Weather                               ////when we press the button, getWeather(props) gets calle
                    temperature={this.state.temperature} // value of all these are displayed by the weather component
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherPage; // inorder for other files to import WeatherPage component
