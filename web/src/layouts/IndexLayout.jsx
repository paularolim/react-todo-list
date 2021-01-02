import React from "react";
import { IconContext } from "react-icons";
import { BsCalendar } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

import Logo from "../assets/img/logo.svg";

import "./IndexLayout.css";

const IndexLayout = (props) => {
    return (
        <div className="index-layout">
            <div className="presentation">
                <img src={Logo} alt="Logo" className="logo" />

                <div>
                    <span className="phrase">
                        <IconContext.Provider value={{ className: "icon" }}>
                            <BsCalendar />
                        </IconContext.Provider>
                        <p>Control your routine</p>
                    </span>

                    <span className="phrase">
                        <IconContext.Provider value={{ className: "icon" }}>
                            <FaTasks />
                        </IconContext.Provider>
                        <p>Be productive</p>
                    </span>

                    <span className="phrase">
                        <IconContext.Provider value={{ className: "icon" }}>
                            <BiTimeFive />
                        </IconContext.Provider>
                        <p>Save free time</p>
                    </span>
                </div>
            </div>

            <div className="form-container">
                <h1>{props.title}</h1>

                {props.children}
            </div>
        </div>
    );
};

export default IndexLayout;
