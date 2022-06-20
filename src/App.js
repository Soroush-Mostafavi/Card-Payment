import React, { useState } from 'react';
import Cardshow from './Cardshow';
import Autoimplement from './Autoimplement';
import Selectoptions from './Selectoptions';


const ImageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png"
]
function App() {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('')
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState("https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png");

  // const [flip, setFlip] = useState(null);

  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
    // console.log(e.target.value);
  }

  const handleType = (type) => {
    setCardType(type);
    console.log(type);

    if (type === "visa") {
      setCardTypeUrl(ImageUrls[0]);
      console.log("Visa")
    } else if (type === "mastercard") {
      setCardTypeUrl(ImageUrls[1]);
      console.log("Mastercard")
    } else if (type === "discover") {
      setCardTypeUrl(ImageUrls[2]);
      console.log("Discover")
    } else if (type === "amex") {
      setCardTypeUrl(ImageUrls[3]);
      console.log("Amex")
    } else if (type === "diners") {
      console.log("Diners")
      setCardTypeUrl(ImageUrls[4])
    } else if (type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(ImageUrls[5]);
    }
  }

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  }

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  }

  // cleave.js logic 

  return (
    <div className="container">
      <form id="form">
        <Cardshow
          handleNum={handleNum}
          cardTypeUrl={cardTypeUrl}
          creditCardNum={creditCardNum}
          cardHolder={cardHolder}
          expireMonth={expireMonth}
          handleCardHolder={handleCardHolder}
          handleType={handleType}
          expireYear={expireYear}
        />

        <div className="input-grp">
          <Selectoptions
            expireYear={expireYear}
            handleExpYear={handleExpYear}
            expireMonth={expireMonth}
            handleExpMonth={handleExpMonth}
          /></div>
        <div id='fakecodecontainer'>
          <Autoimplement />
        </div>
        <button>{`Submit ${cardType} payment`}</button>
      </form>
    </div>
  );
}

export default App;
