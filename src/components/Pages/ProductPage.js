import React, { useState } from "react";
import SideBar from "./SideBar";
import { GrClose } from "react-icons/gr";

import "./ProductPage.css";

function ProductPage(props) {
  const [checkoutTouched, setCheckoutTouched] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  let path = window.location.pathname.slice(1);
  let sliceStart = path.indexOf("/") + 1;
  let targetShoeName = window.decodeURI(path.slice(sliceStart, -5));
  let targetShoeId = path.slice(-5);

  let shoeData = require("./shoes.json");

  let target = [];
  for (let i = 0; i < shoeData.length; i++) {
    if (shoeData[i].shoe == targetShoeName && shoeData[i].id == targetShoeId) {
      target.push(shoeData[i]);
    }
  }
  target = target[0];
  let validSizes = [];
  let stock = Object.values(target.sizes).reduce((a, b) => a + b, 0);

  for (var key in target.sizes) {
    validSizes.push(key);
  }

  const selectSize = (e) => {
    setSelectedSize(e.target.id);
    // e.target.className = "shoe-size-thumbnail thumbnail-selected";
  };

  let addedToCart = {};
  const addToCart = () => {
    addedToCart["shoe"] = target;
    addedToCart["size"] = selectedSize;
    addedToCart["num"] = 1;
    setSelectedSize(null);

    let basket;

    if (localStorage.basket) {
      basket = JSON.parse(localStorage.getItem("basket"));
      let found = false;
      for (let i = 0; i < basket.length; i++) {
        if (
          basket[i].shoe.id == addedToCart.shoe.id &&
          basket[i].size == addedToCart.size
        ) {
          found = true;
          if (basket[i].num == basket[i].shoe.sizes[selectedSize]) {
            break;
          } else {
            basket[i].num = basket[i].num + 1;
            localStorage.setItem("basket", JSON.stringify(basket));
            break;
          }
        }
      }
      if (found == false) {
        basket.push(addedToCart);
        localStorage.setItem("basket", JSON.stringify(basket));
      }
    } else {
      basket = [];
      basket.push(addedToCart);

      localStorage.setItem("basket", JSON.stringify(basket));
    }
    window.location.reload();
  };

  return (
    <>
      <div className="page-container">
        <div className="sidebar-container">
          <SideBar items={props.items} />
        </div>
        <div className="page-main">
          <div className="product-container-wrapper">
            <div className="product-container">
              <div className="shoe-images-container">
                <div className="shoe-image-stack">
                  <div className="shoe-image">
                    <img
                      src="https://via.placeholder.com/140"
                      alt={`${target.shoe} 1`}
                    />
                  </div>
                  <div className="shoe-image">
                    <img
                      src="https://via.placeholder.com/140"
                      alt={`${target.shoe} 2`}
                    />
                  </div>
                  <div className="shoe-image">
                    <img
                      src="https://via.placeholder.com/140"
                      alt={`${target.shoe} 3`}
                    />
                  </div>
                  <div className="shoe-image">
                    <img
                      src="https://via.placeholder.com/140"
                      alt={`${target.shoe} 4`}
                    />
                  </div>
                </div>
                {/* <img
                  src={
                    window.innerWidth < 750
                      ? "https://via.placeholder.com/200"
                      : null
                  }
                /> */}
                {window.innerWidth < 750 ? null : (
                  <img
                    src="https://via.placeholder.com/600"
                    alt={`${target.shoe} main`}
                  />
                )}
                {/* <img
                  src={
                    window.innerWidth < 750
                      ? null
                      : "https://via.placeholder.com/600"
                  }
                /> */}
              </div>
            </div>
            <div className="product-details">
              <div className="product-name-price-wrapper">
                <div className="product-name">{target.shoe}</div>
                <div className="product-price">{target.price}</div>
              </div>
              <div className="product-brand">{target.brand}</div>
              <div
                className={
                  stock > 0
                    ? "shoe-size-thumbnails"
                    : "shoe-size-thumbnails out-of-stock"
                }
              >
                {validSizes.map((size) => (
                  <>
                    <button
                      id={size}
                      className={
                        target.sizes[size] > 0
                          ? "shoe-size-thumbnail"
                          : "shoe-size-thumbnail out-of-stock"
                      }
                      onClick={target.sizes[size] > 0 ? selectSize : null}
                    >
                      {size}
                      <div
                        className={
                          target.sizes[size] == 0
                            ? "shoe-size-thumbnail-cross"
                            : "shoe-size-thumbnail-cross-inactive"
                        }
                      >
                        <GrClose />
                      </div>
                    </button>
                  </>
                ))}
              </div>
              {stock > 0 ? (
                <>
                  <div className="selected-size">
                    {selectedSize == null
                      ? "Please select a size"
                      : `Selected size: ${selectedSize}`}
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={
                      selectedSize != null
                        ? addToCart
                        : () => {
                            setCheckoutTouched(true);
                          }
                    }
                  >
                    Add to Cart
                  </button>
                </>
              ) : (
                <div>Out of Stock</div>
              )}
              <button className="add-to-cart">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
