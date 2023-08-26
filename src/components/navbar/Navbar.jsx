import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <i class="ri-search-line icon"></i>
        </div>
        <div className="items">
          <div className="item">
            <i class="ri-earth-fill icon"></i>
            <span>English</span>
          </div>

          <div className="item">
            <i class="ri-fullscreen-exit-fill icon"></i>
          </div>
          <div className="item">
            <i class="ri-notification-3-fill icon"></i>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <i class="ri-chat-4-fill icon"></i>
            <div className="counter">4</div>
          </div>
          <div className="item">
            <i class="ri-list-unordered icon"></i>
          </div>
          <div className="item">
            <img className="avatar" src="/assets/img/img-1.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
