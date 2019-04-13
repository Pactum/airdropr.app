import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class TopNavBar extends Component {

  render() {
    return(
      <nav className="TopNavBar navbar navbar-expand-sm navbar-light bg-light mb-4 navbar_customize">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1>Airdrop</h1>
          </Link>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/About"> About
                </Link>
              </li>
            </ul>
            {'account: ' + this.props.accounts[0]}
          </div>
            <Menu noOverlay isOpen={ false } right className='burger-menu'>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item menu-item">
                  <Link className="nav-link" to="/About">
                    <i className="fas fa-info-circle" /> About
                  </Link>
                </li>
              </ul>
            </Menu>
        </div>
      </nav>

    )
  }
}

export default TopNavBar;
