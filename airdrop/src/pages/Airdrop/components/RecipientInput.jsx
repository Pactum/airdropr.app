import React, { useState } from 'react';

export default function RecipientInput() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    console.log(address, amount);
  }

  return(
    <ul className="create-list">
      <li className="create-list-item">
        <h4 className="text-align-center">
          Create a list of airdrop recipients by adding erc20 wallet
          addresses with the amount of tokens you would like to send.
        </h4>
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
