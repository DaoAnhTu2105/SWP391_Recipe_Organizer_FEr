import React from "react";
import imgLogo from "../img/core-img/logo.png";
import { Search } from "./Search";

const Header = () => {
  return (
    <header className="header-area">
      <div className="delicious-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classy-navbar justify-content-between"
              id="deliciousNav"
            >
              <a className="nav-brand" href="index.html">
                <img src={imgLogo} alt="" />
              </a>

              <div className="classy-menu">
                <div className="classynav">
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="/#">Pages</a>
                    </li>
                    <li>
                      <a href="/#">Mega Menu</a>
                    </li>
                    <li>
                      <a href="receipe-post.html">Receipies</a>
                    </li>
                    <li>
                      <a href="receipe-post.html">4 Vegans</a>
                    </li>
                    <li>
                      <a href="/view-plan">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Search />
    </header>
  );
};

export default Header
