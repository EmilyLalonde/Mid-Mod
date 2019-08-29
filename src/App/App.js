import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'
import { getData } from '../apiCalls/apiCalls.js'
import AppForm from '../AppForm/AppForm.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
     getData()
    .then(data => this.setState({ data }))
    .catch(error => error.message)
  }

  addPurchase = (newPurchase) => {
    // this.setState({ data: [...this.state.data, newPurchase]})
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newPurchase })
    };
  
    fetch('http://localhost:3001/api/v1/ideas', options)
      .then(response => response.json())
      .then(response => fetch(`http://localhost:3001/api/v1/ideas/${response.id}`))
      .then(response => response.json())
      .then(newIdea => this.setState({ ideas: [...this.state.ideas, newPurchase] }))
      .catch(error => this.setState({ error: error.message }))
  }

  deletePurchaseCard = (id) => {
    const filteredData = this.state.data.filter( purchase => purchase.id !== id)
    this.setState({data : filteredData})
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
        <CardContainer data = {this.state.data} deletePurchaseCard = {this.deletePurchaseCard}/>
        </div>
      </div>
    );
  }
}


export default App;

  