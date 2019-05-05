import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeComponent from './components/pages/home';
import AboutComponent from './components/pages/about';
import ContactUsComponent from './components/pages/contact';
import LoginComponent from './components/pages/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/contacts" component={ContactUsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
