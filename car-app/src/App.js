import React, { Component } from 'react';
import './App.css';

import Car from './components/Car';

class App extends Component {render() {
    return (
      <div className="App">
        <header className="App-header">
          <Car/>
        </header>
      </div>
    );
  }
}

export default App;
