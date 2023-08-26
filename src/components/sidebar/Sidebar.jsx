import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Akmalov11c</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <i class="ri-dashboard-fill icon"></i>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <i class="ri-user-3-fill icon"></i>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <i class="ri-product-hunt-fill icon"></i>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <i class="ri-shape-2-fill icon"></i>
            <span>Orders</span>
          </li>
          <li>
            <i class="ri-truck-fill icon"></i>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <i class="ri-bar-chart-fill icon"></i>
            <span>Stats</span>
          </li>
          <li>
            <i class="ri-notification-3-fill icon"></i>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <i class="ri-shield-cross-line icon"></i>
            <span>System Health</span>
          </li>
          <li>
            <i class="ri-brain-fill icon"></i>
            <span>Logs</span>
          </li>
          <li>
            <i class="ri-settings-3-fill icon"></i>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <i class="ri-profile-fill icon"></i>
            <span>Profile</span>
          </li>
          <li>
            <i class="ri-logout-circle-r-fill icon"></i>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
