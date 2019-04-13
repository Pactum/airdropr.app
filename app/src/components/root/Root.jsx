import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNavBar from '../topNavBar';
import Footer from '../footer';
import Home from '../../pages/home';
import About from '../../pages/about';
import Airdrop from '../../pages/Airdrop';


import './root.css';

class Root extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/About" component={ About } />
            <Route path="/Airdrop" component={ Airdrop } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Root;
