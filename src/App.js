import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomeComponent from './components/pages/home'
import AboutComponent from './components/pages/about'
import ContactUsComponent from './components/pages/contact'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/about' component={AboutComponent}></Route>
          <Route exact path='/contacts' component={ContactUsComponent}></Route>
        </div>
      </Router>

    );
  }
}

export default App;
