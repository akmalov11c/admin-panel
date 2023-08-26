import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <i class="ri-more-2-fill" style={{ cursor: "pointer" }}></i>
      </div>
      <div className="bottom">
        <div className="featured__chart">
          <CircularProgressbar value={70} text="70%" strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="item__title">Target</div>
            <div className="item__result negative">
              <i class="ri-arrow-down-s-line"></i>
              <div className="result__amount">$120.9k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Week</div>
            <div className="item__result positive">
              <i class="ri-arrow-up-s-line"></i>
              <div className="result__amount">$1.642k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Months</div>
            <div className="item__result positive">
              <i class="ri-arrow-up-s-line"></i>
              <div className="result__amount">$5.872k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
