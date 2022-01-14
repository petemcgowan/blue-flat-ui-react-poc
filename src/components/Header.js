import React from "react";
import "../styles.css";

export function Header() {
  return (
    <div>
      {/* <!-- HEADER --> */}
      <header class="block">
        <ul class="header-menu horizontal-list">
          <li>
            <a class="header-menu-tab" href="#1">
              <span class="icon entypo-cog scnd-font-color"></span>Settings
            </a>
          </li>
          <li>
            <a class="header-menu-tab" href="#2">
              <span class="icon fontawesome-user scnd-font-color"></span>Account
            </a>
          </li>
          <li>
            <a class="header-menu-tab" href="#3">
              <span class="icon fontawesome-envelope scnd-font-color"></span>
              Messages
            </a>
            <a class="header-menu-number" href="#4">
              5
            </a>
          </li>
          <li>
            <a class="header-menu-tab" href="#5">
              <span class="icon fontawesome-star-empty scnd-font-color"></span>
              Favorites
            </a>
          </li>
        </ul>
        <div class="profile-menu">
          <p>
            Me{" "}
            <a href="#26">
              <span class="entypo-down-open scnd-font-color"></span>
            </a>
          </p>
          <div class="profile-picture small-profile-picture">
            <img
              width="40px"
              alt="Anne Hathaway"
              src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
