import React, { Component } from "react";
import { getClassName } from "../../../ui/utils/component";

import "./Header.scss";

import logo from "../../../assets/logo-img.svg";

const ccn = getClassName("ContactsHeader");

export class ContactsHeader extends Component {
    render() {
        return (
            <header className={ccn()}>
                <div className={ccn("container")}>
                    <a href="/" className={ccn("logo")}>
                        <img src={logo} alt=""/>
                    </a>
                    <div className={ccn("btnWrap")}>
                        <a href="/" className="btn">Log In Now</a>
                    </div>
                </div>
            </header>
        );
    }
}

