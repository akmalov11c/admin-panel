import React from "react";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        icon: (
          <i
            className="ri-user-3-line icon"
            style={{ color: "crimson", backgroundColor: "rgb(255, 0, 0, 0.2)" }}
          ></i>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <i
            class="ri-shopping-cart-2-line icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgb(218, 165, 32, 0.2)",
            }}
          ></i>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <i
            class="ri-money-dollar-circle-line icon"
            style={{
              color: "green",
              backgroundColor: "rgb(0, 128, 0, 0.2)",
            }}
          ></i>
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <i
            class="ri-wallet-3-line icon"
            style={{
              color: "purple",
              backgroundColor: "rgb(128, 0, 128, 0.2)",
            }}
          ></i>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percetn positive">
          <i class="ri-arrow-up-s-line"></i>
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
