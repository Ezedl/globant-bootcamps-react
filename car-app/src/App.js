import React, { Component } from 'react';
import './App.css';

import Car from './components/Car';

class App extends Component {
  state = {
    cars : 0
  }

  onClickHandler = () => {
    let newValue = this.state.cars + 1;
    this.setState({
      cars : newValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Car/>
          You have { this.state.cars } cars. 
          <Button onClick={ this.onClickHandler } />
        </header>
      </div>
    );
  }
}

const Button = props => {
  return <button onClick={ props.onClick }>Buy a car!</button>
}

export default App;
