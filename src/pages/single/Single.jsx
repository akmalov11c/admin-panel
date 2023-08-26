import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single__container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit__btn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/assets/img/img-1.jpg" alt="" className="item__img" />
              <div className="details">
                <h1 className="item__title">Akmalov11c</h1>
                <div className="detail__item">
                  <span className="item__key">Email:</span>
                  <span className="item__value">akmalov1ch09@gmail.com</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">+998912019909</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Adress:</span>
                  <span className="item__value">Tashkent</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Country:</span>
                  <span className="item__value">Uzbekistan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
