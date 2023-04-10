import React from "react";
import "./BottomLinks.css";

import Card from "./Card";

function BottomLinks() {
  const customerService = [
    { key: 1, name: "Delivery & Collection", link: "/example1" },
    { key: 2, name: "Returns", link: "/example2" },
    { key: 3, name: "Track an Order", link: "/example2" },
    { key: 4, name: "Contact Us", link: "/contact" },
    { key: 5, name: "Size Chart", link: "/example2" },
  ];
  const policies = [
    { key: 1, name: "Lorem ipsum", link: "/example1" },
    { key: 2, name: "Dolor", link: "/example2" },
    { key: 3, name: "Sit Amet", link: "/example2" },
    { key: 4, name: "Consectetur", link: "/example2" },
    { key: 5, name: "Adipscing Elit", link: "/example2" },
  ];
  const information = [
    { key: 1, name: "Sed Do Eiusmod", link: "/example1" },
    { key: 2, name: "Tempor", link: "/example2" },
    { key: 3, name: "Incididunt", link: "/example2" },
    { key: 4, name: "Ut Labore", link: "/example2" },
    { key: 5, name: "Et Dolore", link: "/example2" },
  ];
  const corporate = [
    { key: 1, name: "Magna Aliqua", link: "/example1" },
    { key: 2, name: "Ut Enim", link: "/example2" },
    { key: 3, name: "Ad Minim Veniam", link: "/example2" },
    { key: 4, name: "Quis Nostrud", link: "/example2" },
    { key: 5, name: "Exercitation", link: "/example2" },
  ];

  return (
    <div className="cards-container">
      <Card title={"Customer Service"} items={customerService} />
      <Card title={"Policies"} items={policies} />
      <Card title={"Information"} items={information} />
      <Card title={"Corporate"} items={corporate} />
    </div>
  );
}

export default BottomLinks;
