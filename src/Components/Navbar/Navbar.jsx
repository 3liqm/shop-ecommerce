import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { ShopContext } from "../../Context/ShopContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {BsFillCartPlusFill} from 'react-icons/bs'
import { IoPerson } from "react-icons/io5";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const navRef = useRef();

  const shoeNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className=" navbar">
      <div className="container">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <Link className="link-logo" to='/'>shop</Link>
        </div>
        <ul className="nav-menu" ref={navRef}>
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link className="nav-menu-link" to="/">
              Shop
            </Link>{" "}
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link className="nav-menu-link" to="/mens">
              Men
            </Link>{" "}
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link className="nav-menu-link" to="/womens">
              Women
            </Link>{" "}
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link className="nav-menu-link" to="kids">
              Kids
            </Link>{" "}
            {menu === "kids" ? <hr /> : <></>}
          </li>
          <AiOutlineClose
            onClick={shoeNavbar}
            className="nav-btn nav-close-btn"
            size={20}
          />
        </ul>

        <div className="nav-logo-cart">
          <DarkMode />
          <Link className="navbar-login" to="/login">
            <IoPerson className="icons"/>
          </Link>
          <Link to="/cart">
           <BsFillCartPlusFill className="icons" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <div className="action-btn">
            <AiOutlineMenu onClick={shoeNavbar} className="nav-btn" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
