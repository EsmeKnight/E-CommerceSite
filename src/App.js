import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Page from "./components/Pages/Page";
import ContactPage from "./components/Pages/ContactPage";
import ProductPage from "./components/Pages/ProductPage";
import Basket from "./components/Pages/Basket";

export const BasketContext = React.createContext();

const sidebarItems = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit Amet",
  "Consectetur",
  "Adipiscing",
  "Elit",
  "Sed Do",
  "Eiusmod",
  "Tempor",
  "Incidunt",
  "Ut Labore",
];

let basket;
let basketCount = 0;

const checkBasket = () => {
  if (localStorage.basket) {
    basket = JSON.parse(localStorage.getItem("basket"));
    for (var i = 0; i < basket.length; i++) {
      basketCount += basket[i].num;
    }
  } else {
    basket = [];
  }
};
checkBasket();

window.dispatchEvent(new Event("storage"), checkBasket);

function App() {
  return (
    <>
      <Router>
        <BasketContext.Provider value={basketCount}>
          <Navbar />
        </BasketContext.Provider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="mens">
            <Route index element={<Page title="Mens" items={sidebarItems} />} />
            <Route
              path=":shoe:id"
              element={<ProductPage items={sidebarItems} />}
            />
          </Route>
          <Route path="womens">
            <Route
              index
              element={<Page title="Womens" items={sidebarItems} />}
            />
            <Route
              path=":shoe"
              element={<ProductPage items={sidebarItems} />}
            />
          </Route>
          <Route path="kids">
            <Route index element={<Page title="Kids" items={sidebarItems} />} />
            <Route
              path=":shoe"
              element={<ProductPage items={sidebarItems} />}
            />
          </Route>
          <Route
            path="contact"
            element={<ContactPage items={sidebarItems} />}
          />
          <Route path="basket" element={<Basket basketItems={basket} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
