import React, { Component} from 'react';
import FileButton from './components/FileButton';
import logo from '../../images/airdrop_parachute.png';
import './airdrop.css';


class Airdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      errMsg: '',
    }
  }

  setCsvFile = (e) => {
    console.log(e);
  }

  handleAdd = (e) => {
    e.preventDefault();
    console.log(e);
  }

  render() {

    return(
      <div className="airdrop">
        <div className="airdrop-grid">
          <div className="airdrop-grid-item grid-logo">
            <img src={logo} className="grid-logo-img" alt="logo" />
          </div>
          <div className="airdrop-grid-item file-input-btn">
            <FileButton setCsvFile={this.setCsvFile}/>
          </div>
          <div className="airdrop-grid-item grid-csv-input">
            <ul className="creat-list">
              <li>
                <h4>
                  Create a list of airdrop recipients by adding erc20 wallet
                  addresses with the amount of tokens you would like to send.
                </h4>
              </li>
              <li>
                <form onSubmit={this.handleAdd}>
                  <input
                    placeholder="recipient address"
                    type="text"
                    className="address-input ad-input"/>
                  <input
                    placeholder="amount"
                    type="text"
                    className="amount-input ad-input"/>
                  <button type='submit'>Add</button>
                </form>
              </li>
            </ul>
          </div>
          <div className="airdrop-grid-item grid-batch-list">
            {this.state.errMsg}
          </div>
        </div>
      </div>
    )
  }
}


export default Airdrop;
