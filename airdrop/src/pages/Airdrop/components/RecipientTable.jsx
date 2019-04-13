import React from 'react';

export default function RecipientTable(props) {

  function isOdd(num) {
    return num % 2;
  }

  return (
    <table className="recipient-table">
      <tbody>
        <tr>
          <th className="table-header">address</th>
          <th className="table-header">amount</th>
        </tr>
        {props.recipientList.map((recipient, index)  => {
          let cssName;
          (isOdd(index)) ? cssName = "table-cell dark" : cssName = "table-cell light";
          return(
            <tr key={index}>
              <td className={cssName}>{recipient.address}</td>
              <td className={cssName}>{recipient.amount}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
