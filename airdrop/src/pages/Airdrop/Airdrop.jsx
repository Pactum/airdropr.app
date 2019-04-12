import React, { Component} from 'react';
import FileButton from './components/FileButton';
import logo from '../../images/airdrop_parachute.png';
import './airdrop.css';


class Airdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      recipientAddress: '',
      recipientAmount: '',
      recipientList: [
        {
          address: "0xC1B28CF32e6ea25b9191118DE97f3De9d7bC2803",
          amount: 2000,
        },{
          address: "0xeD52517b554594a23CDfF0D6A738656221774bD8",
          amount: 100,
        }
      ],
      errMsg: '',
    }
  }

  setCsvFile = (e) => {
    console.log(e);
  }

  handleAdd = (e) => {
    e.preventDefault();
    console.log(e, this.state.recipientList);
  }

  isOdd = (num) => {
    return num % 2;
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
            <ul className="create-list">
              <li className="create-list-item">
                <h4 className="text-align-center">
                  Create a list of airdrop recipients by adding erc20 wallet
                  addresses with the amount of tokens you would like to send.
                </h4>
              </li>
              <li>
                <form className="flex" onSubmit={this.handleAdd}>
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
            <table className="recipient-table">
              <tbody>
                <tr>
                  <th className="table-header">address</th>
                  <th className="table-header">amount</th>
                </tr>
                {this.state.recipientList.map((recipient, index)  => {
                  let cssName;
                  (this.isOdd(index)) ? cssName = "table-cell dark" : cssName = "table-cell light";
                  return(
                    <tr key={index}>
                      <td className={cssName}>{recipient.address}</td>
                      <td className={cssName}>{recipient.amount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default Airdrop;
