import React, { Component} from 'react';
import FileButton from './components/FileButton';
import RecipientInput from './components/RecipientInput';
import RecipientTable from './components/RecipientTable';
import logo from '../../images/airdrop_parachute.png';
import './airdrop.css';


class Airdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {
    console.log(this.state, 'props' ,this.props);
  }

  render() {

    return(
      <div className="airdrop">
        <div className="airdrop-grid">
          <div className="airdrop-grid-item grid-logo">
            <img src={logo} className="grid-logo-img" alt="logo" />
          </div>
          <div className="airdrop-grid-item file-input-btn">
            <FileButton />

          </div>
          <div className="airdrop-grid-item grid-csv-input">
            <RecipientInput />
          </div>
          <div className="airdrop-grid-item grid-batch-list">
            <RecipientTable recipientList={this.state.recipientList} />
          </div>
        </div>
      </div>
    )
  }
}


export default Airdrop;
