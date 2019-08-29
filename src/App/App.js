import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
     fetch('http://localhost:3001/api/v1/purchases')
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch(error => error.message)
  }

  
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>
        <CardContainer data = {this.state.data}/>
        </div>
      </div>
    );
  }
}


export default App;
