import React, { useState } from 'react';

export default function RecipientInput(props) {
  const [token, setToken] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  function handleToken(e) {
    e.preventDefault();

    console.log(token, props);
  }

  function handleAdd(e) {
    e.preventDefault();
    console.log(address, amount);
  }

  return(
    <ul className="create-list">
      <li className="create-list-item">
        <h4 className="text-align-center">
          Add the erc20 token address you would like to airdrop from and
          create a list of airdrop recipients by adding erc20 wallet
          addresses with the amount of tokens you would like to send.
        </h4>
      </li>
      <li className="create-list-item">
        <form className="flex" onSubmit={handleToken}>
          <input
            required
            value={token}
            onChange={e => setToken(e.target.value)}
            placeholder="ERC20 token address"
            type="text"
            className="address-input ad-input"/>
          <button type='submit'>Submit</button>
        </form>

        <props.ContractForm
          contract="AirdropperFactory"
          method="createAirdropper"
          labels={["ERC20 Contract Address"]}
        />
      </li>
      <li>
        <form className="flex" onSubmit={handleAdd}>
          <input
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="recipient address"
            type="text"
            className="address-input ad-input"/>
          <input
            required
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="amount"
            type="text"
            className="amount-input ad-input"/>
          <button type='submit'>Add</button>
        </form>
      </li>
    </ul>
  )
}
