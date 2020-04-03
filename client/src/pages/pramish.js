import React, { Component } from 'react';
import './pramish.css';
import axios from 'axios';
import NumberFormat from 'react-number-format'


class Pramish extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (
      <div className="Pramish">
        {Object.keys(this.state.cryptos).map((key) => (

          <div id="crypto-container">
              Todays price for
            <span className="left">{key}</span>
            <span className="right">
                <NumberFormat
                    value={this.state.cryptos[key].USD}
                    displayType={'text'}
                    decimalPrecision={2}
                    thousandSeparator={true}
                    prefix={'$'}
                />
            </span>
          </div>



        ))}
      </div>
    );

    <footer>
    <ul>
        <li onClick={this.reload}>Re:search</li>
        <li><Link to = "">Back to Home</Link></li>
    </ul>
</footer>
  }
}

export default Pramish;
