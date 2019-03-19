import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import { List, ListItem, ListItemText} from '@material-ui/core';

import Main from './components/Main';
import CarForm from './components/CarForm';

class App extends Component {render() {
    return (
      <Router>
        <div className='root'>
          <List component='nav' className='nav'>
            <ListItem button component={ Link } to='/vehicles'>
              <ListItemText primary='List'></ListItemText>
            </ListItem>
            <ListItem button component={ Link } to='/'>
              <ListItemText primary='Upload a car'></ListItemText>
            </ListItem>
          </List>
          <main className='main'>
            <Route exact path='/' component={ CarForm }></Route>
            <Route path='/vehicles' component={ Main }></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
