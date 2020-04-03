import React from "react";

const Form = props => (           // react attribute, it call 
	<form onSubmit={props.getWeather}> 
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>  
	</form>             // when we press the button this form is going to be submit
);

export default Form;