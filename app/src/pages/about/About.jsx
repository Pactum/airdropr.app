import React, { Component } from 'react';
import './about.css';

class About extends Component {

  render() {
    return(
      <div className="about">
        <div className="about-grid">
          <div className="about-grid-item center">
            This is an open source Airdrop dapp to help token creators distribute their erc20 tokens.
          </div>
        </div>
      </div>
    )
  }
}

export default About;
