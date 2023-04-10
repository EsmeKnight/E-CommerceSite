import React, { useState } from "react";
import "./Basket.css";

function Basket() {
  const [emailTouched, setEmailTouched] = useState(false);
  // const [voucherTouched, setVoucherTouched] = useState(false);

  // validators
  const [emailValid, setEmailValid] = useState(false);
  // const [voucherValid, setVoucherValid] = useState(true);

  // const submitForm = () => {};

  const validator = (e) => {
    const target = e.target.id;

    // idividual inputs
    if (target == "email-input") {
      setEmailTouched(true);
      if (e.target.value && emailTouched) {
        setEmailValid(true);
      } else if (e.target.value != true && emailTouched) {
        setEmailValid(false);
      }
    }

    // check all on button click
    if (target == "checkout-button") {
      // console.log(`${emailInput.value != true ? "null value" : "value"}`);
      // document.getElementById("email-input").value
      //   ? console.log("Value: " + document.getElementById("email-input").value)
      //   : console.log("error");
      e.preventDefault();
      if (
        emailTouched == false ||
        document.getElementById("email-input").value == false
      ) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
      if (emailValid) {
        handleCheckout();
      }
    }
  };

  let basket;
  if (localStorage.basket) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }

  let total = 0;

  const handleDecrease = (e) => {
    let targetDetails = e.target.id.split(",");
    let targetId = targetDetails[0];
    targetId = parseInt(targetId);
    let targetSize = targetDetails[1];

    for (let i = 0; i < basket.length; i++) {
      if (basket[i].shoe.id == targetId && basket[i].size == targetSize) {
        if (basket[i].num > 0) {
          basket[i].num = basket[i].num - 1;
          console.log(basket);
          localStorage.setItem("basket", JSON.stringify(basket));
          if (basket[i].num == 0) {
            basket.splice(i, 1);
            localStorage.setItem("basket", JSON.stringify(basket));
            break;
          }
          break;
        }
      }
    }
    calculateTotal();
    window.location.reload();
  };

  const handleIncrease = (e) => {
    let targetDetails = e.target.id.split(",");
    let targetId = targetDetails[0];
    targetId = parseInt(targetId);
    let targetSize = targetDetails[1];

    for (let i = 0; i < basket.length; i++) {
      if (basket[i].shoe.id == targetId && basket[i].size == targetSize) {
        if (basket[i].num < basket[i].shoe.sizes[parseInt(targetSize)]) {
          basket[i].num = basket[i].num + 1;
          console.log(basket);
          localStorage.setItem("basket", JSON.stringify(basket));
          break;
        }
      }
    }
    calculateTotal();
    window.location.reload();
  };

  const handleCheckout = () => {
    basket = [];
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.reload();
  };

  const handleClearVoucher = () => {
    let input = document.getElementById("voucher-input");
    input.value = "";
  };

  const calculateTotal = () => {
    for (let i = 0; i < basket.length; i++) {
      let curItemTotal =
        basket[i].num * parseFloat(basket[i].shoe.price.slice(1));
      total += curItemTotal;
    }
  };
  calculateTotal();

  return (
    <div className="basket-wrapper">
      <div className="basket-title">My Basket</div>
      <div className="basket-container">
        <div className="basket-shoes-container">
          {basket.map((item) => (
            <div className="basket-shoe">
              <div className="basket-image-container">
                <img
                  src={
                    window.innerWidth < 988
                      ? "https://via.placeholder.com/150"
                      : "https://via.placeholder.com/300"
                  }
                  alt=""
                />
              </div>
              <div className="shoe-details-container">
                <div className="shoe-name-color">
                  <div className="basket-shoe-name">{item.shoe.shoe}</div>
                  <div className="basket-shoe-brand">{item.shoe.brand}</div>
                  <div className="basket-shoe-size">Size: {item.size}</div>
                </div>
                <div className="shoe-price-number">
                  <div className="basket-shoe-price">{item.shoe.price}</div>
                  <div className="increase-decrease-num-container">
                    <button
                      id={[item.shoe.id, item.size]}
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    {item.num}
                    <button
                      id={[item.shoe.id, item.size]}
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-container">
          <div className={total > 0 ? "checkout" : "checkout-inactive"}>
            <div className="checkout-price">
              £{`${total.toFixed(2)}`.replace(/^0+/, "")}
            </div>
            <span>
              <div className="checkout-input-container">
                <label className="input-pipe">Email *</label>
                <input
                  className={emailValid ? "email-input" : "email-input invalid"}
                  id="email-input"
                  type="text"
                  onClick={validator}
                  onChange={validator}
                  placeholder={
                    emailValid == false ? "This field is mandatory" : ""
                  }
                />
              </div>
            </span>
            <span>
              <div className="checkout-input-container">
                <label className="input-pipe">Voucher Code</label>
                <input
                  // className={emailValid ? "email-input" : "email-input invalid"}
                  className="voucher-input"
                  id="voucher"
                  type="text"
                  onClick={validator}
                  // placeholder="Voucher Code"
                />
                <button onClick={handleClearVoucher}>Apply Code</button>
              </div>
            </span>
            {/* <div className="checkout-voucher-input">
              <input
                id="voucher-input"
                type="text"
                placeholder="Voucher Code"
              />
              <button onClick={handleClearVoucher}>Apply Code</button>
            </div> */}
            <button
              id="checkout-button"
              className="checkout-button"
              onClick={validator}
            >
              Checkout
            </button>
            {/* <div className="payment-methods">
              <div>
                <img
                  className="payment-method-img"
                  src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterPaypal"
                  alt="paypal-logo"
                />
              </div>
              <div>
                <img
                  className="payment-method-img"
                  src="https://s7g10.scene7.com/is/content/Pangaea2Build/abCFooterVisa"
                  alt="visa-logo"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
