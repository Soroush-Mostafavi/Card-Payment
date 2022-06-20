import React, { Fragment } from 'react'
import Cleave from 'cleave.js/react';
const Cardshow = ({cardTypeUrl,creditCardNum,cardHolder,expireMonth, 
    expireYear,handleType,handleNum,handleCardHolder}) => {
  return (
    <Fragment>
    <div id="card">
    <div className="header">
      <div className="sticker"></div>
      <div>
        <img className="logo" src={cardTypeUrl} alt="Card logo" />
      </div>
    </div>
    <div className="body">
      <h2 id="creditCardNumber">{creditCardNum}</h2>
    </div>
    <div className="footer">
      <div>
        <h5>Card Holder</h5>
        <h3>{cardHolder}</h3>
      </div>
      <div>
        <h5>Expires</h5>
        <h3>{expireMonth} / {expireYear}</h3>
      </div>
    </div>
  </div>

  <div className="input-container mt">
    <h4>Enter card number</h4>
    <Cleave
      delimiter="-"
      options={{
        creditCard: true,
        onCreditCardTypeChanged: handleType
      }}
      onChange={handleNum}
      placeholder="Please enter your credit card number"
    />
  </div>

  <div className="input-container">
    <h4>Card Holder</h4>
    <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required />
    </div> 
    </Fragment>
)}

export default Cardshow