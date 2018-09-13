import React from 'react';
import {getClassName} from "../../ui/utils/component";
import Menu from './Menu/Menu'
import Companies from './Companies/Companies'

import "./SidebarL.scss";

import adv from "../../assets/advertisement.jpg";

const ccn = getClassName("SidebarL");

const SidebarL = (props) => (
        <aside className={ccn()}>
            <nav className={ccn("menu")}>
                <ul>
                    <Menu />
                </ul>
            </nav>
            <h2 className="ttl">Advertisement</h2>
            <img src={adv} alt="adv" />
            <span className={ccn("site")}>Ads By Denteez.com</span>
            <Companies />
            <div className={ccn("links")}>
                <p><span>Denteez Copyright 2015</span></p>
                <a href="/">
                    <span>Terms of use</span>
                </a>
                <a href="/">
                    <span>Privacy Policy</span>
                </a>
            </div>
        </aside>
);

export default SidebarL;