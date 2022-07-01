import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.everestwalk.com/5.png"
      ></img>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Subarna</span>
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">MICE</span>
          <span className="header_optionTwo">& MOUSEPAD</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">HEADPHONE</span>
          <span className="header_optionTwo"> & KEYBOARDS</span>
        </div>

        <div className="header_search">
          <input className="header_searchInput" type="text"></input>
          {/* search logo after this*/}
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header_optionTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
