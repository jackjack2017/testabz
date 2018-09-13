import React, { Component } from "react";
import { getClassName } from "../../ui/utils/component";

import "./Header.scss";

import logo from "../../assets/logo-img.svg";
import search from "../../assets/search.png";
import icon1 from "../../assets/chat.png";
import icon2 from "../../assets/notif.png";
import ava from "../../assets/ava.png";

const ccn = getClassName("Header");

export class Header extends Component {
    render() {
        return (
            <header className={ccn()}>
                <div className="container">
                    <div className={ccn("blk")}>
                        <a href="/" className={ccn("logo")}>
                            <img src={logo} alt=""/>
                        </a>
                        <form action="/"  className={ccn("form")}>
                            <button type="submit" className={ccn("searchBtn")}>
                                <img src={search} alt="search"/>
                            </button>
                            <input type="search" placeholder="Company name"/>
                        </form>
                        <div className={ccn("icons")}>
                            <a href="/">
                                <img src={icon1} alt="icon"/>
                            </a>
                            <a href="/">
                                <img src={icon2} alt="icon"/>
                            </a>
                            <div className={ccn("user")}>
                                <a href="/">
                                    <img src={ava} alt="icon"/>
                                    <span>Maximillian Beekeeper</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

