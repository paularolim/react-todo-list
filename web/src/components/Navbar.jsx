import React from "react";

import { BiUserCircle } from "react-icons/bi";

import LogoSmall from "../assets/img/logo-small.svg";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={LogoSmall} alt="" />

            <BiUserCircle size="45px" fill="#E0E2EE" />
        </div>
    );
};

export default Navbar;
