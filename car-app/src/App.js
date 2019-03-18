import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import Main from './components/Main';
import CarForm from './components/CarForm';

class App extends Component {render() {
    return (
      <Router>
        <div className='root'>
          <List component='nav' className='nav'>
            <ListItem button component={ Link } to='/list'>
              <ListItemText primary='List'></ListItemText>
            </ListItem>
            <ListItem button component={ Link } to='/'>
              <ListItemText primary='Upload a car'></ListItemText>
            </ListItem>
          </List>
          <main className='main'>
            <Route exact path='/' component={ CarForm }></Route>
            <Route path='/list' component={ Main }></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
