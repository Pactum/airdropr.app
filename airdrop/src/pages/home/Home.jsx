import React, { Component } from 'react';
import logo from '../../images/airdrop_parachute_white.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/Airdrop')
    }, 5500);
  }

  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
  }
}

export default Home;
