import React, { Fragment } from 'react'

const Selectoptions = ({handleExpYear,expireYear,expireMonth,handleExpMonth}) => {
  return (
    <Fragment>
    <div className="input-container">
      <h4>Month</h4>

      <select value={expireYear} onChange={handleExpYear}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
    <div className="input-container">
      <h4>Expiration Year</h4>

      <select value={expireMonth} onChange={handleExpMonth}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
      </select>
    </div>
    <div className="input-container">
      <h4>CVV</h4>
      <input type="password" maxLength={4} placeholder="CVV" required />
    </div>
  </Fragment>
  )
}

export default Selectoptions