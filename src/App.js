import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

class App extends Component {
  state = {
    rates: []
  }
  componentDidMount() {
    Axios.get('http://api.fixer.io/latest?base=THB')
    .then((res) => {
      console.log(res.data)
      this.setState({
        rates: res.data.rates
      })
    })
  }
  render() {
    let { rates } = this.state
    let rateKey = Object.keys(rates)
    console.log(rateKey)
    return (
      <div >
        <h1>Bath</h1>
        {
          rateKey.map((key, index) => <div>{key} : {rates[key]}</div>
          )
        }
      </div>
    )
  }
}

export default App;
