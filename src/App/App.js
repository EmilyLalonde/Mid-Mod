import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'
import AppForm from '../AppForm/AppForm.js'

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

  addPurchase = (newPurchase) => {
    this.setState({ data: [...this.state.data, newPurchase]})
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
        <AppForm addPurchase={this.addPurchase}/>
        <CardContainer data = {this.state.data}/>
        </div>
      </div>
    );
  }
}


export default App;
