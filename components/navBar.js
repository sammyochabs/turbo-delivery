import React, { useState } from "react";

export default function Navbar({ services, standAlonePage }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("menu-icon-custom bi bi-list");
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 col-lg-6">
              <ul className="d-flex account_login-area">
                <li>Welcome To Turbo Delivery</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <ul className="d-flex header-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area " id="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-9 col-sm-9 col-9">
              <div className="logo">
                <a href="/">
                  <img
                    className="logoImage"
                    src="assets/images/logo/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 d-none d-lg-block">
              <div className="main-menu">
                <nav className="nav_mobile_menu">
                  <ul>
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/how-it-works">How It Works</a>
                    </li>
                    <li>
                      <a href="/picker">Picker</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact</a>
                    </li>
                    <li>
                      <a href="/get-started">Get Started</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    {/* <li>
                      <a href="/customer-register">Become A Customer</a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-3 d-block d-lg-none">
              <i
                onClick={() => {
                  if (showMenu === true) {
                    setShowMenu(false);
                    setMenuClass("menu-icon-custom bi bi-list");
                  } else {
                    setShowMenu(true);
                    setMenuClass("menu-icon-custom bi bi-x");
                  }
                }}
                className={menuClass}
              ></i>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="">
            <nav className="custom_mobile_menu">
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="/picker">Picker</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
                <li>
                  <a href="/get-started">Get Started</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
