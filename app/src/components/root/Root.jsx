import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNavBarContainer from '../../containers/TopNavBarContainer';
import Footer from '../footer';
import Home from '../../pages/home';
import About from '../../pages/about';
import AirdropContainer from '../../containers/AirdropContainer';


import './root.css';

class Root extends Component {
  render() {
    return (
      <div>
        <TopNavBarContainer />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/About" component={ About } />
            <Route path="/Airdrop" component={ AirdropContainer } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Root;
