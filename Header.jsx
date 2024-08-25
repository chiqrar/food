import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main-nav pt-2">
      <div className="d-flex flex-column logo">
        <img className="logoimg" src="/src/assets/images/foodlogo.png" alt="" />

        <span className="fw-bold">Tasty Treats</span>
      </div>
      <div className=" d-flex gap-5">
        <span>Home</span>
        <link to={"/food"}>Food</link>
        <span>Cart</span>
        <span>Contact</span>
      </div>
      <div className=" d-flex gap-3">
        <span>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span>
          <i class="fa-regular fa-user"></i>
        </span>
      </div>
    </div>
  );
}

export default Header;
