import React, { Component } from 'react';
import '../AppForm/AppForm.css'

class AppForm extends Component {
  constructor() {
    super()
    this.state = {
      image: '',
      name: '',
      description: '',
      price: ''
    }
  }

  handlePurchaseChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitPurchase = (e) => {
    e.preventDefault()
    const newPurchase = {
      id: Date.now(),
      ...this.state
    }
    this.props.addPurchase(newPurchase)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ image: '', name: '', description: '', price: ''})
  }

  render() {
    return (
      <form>
        <input 
        className="addedImg"
        type="text" 
        placeholder="Image Url"
        name="image"
        value={this.state.image}
        onChange={event => this.handlePurchaseChange(event)}
        />
        <input 
        className="addedName" 
        type="text" 
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={event => this.handlePurchaseChange(event)}
        />
        <input 
        className="addedDescription" 
        type="text" 
        placeholder="Description"
        name="description"
        value={this.state.description}
        onChange={event => this.handlePurchaseChange(event)}
        />
        <input 
        className="addedPrice" 
        type="text" 
        placeholder="Price"
        name="price"
        value={this.state.price}
        onChange={event => this.handlePurchaseChange(event)}
        />
        <button type="submit" onClick={e => this.submitPurchase(e)}>Add Purchase</button>
      </form>
    )
  }
}

export default AppForm