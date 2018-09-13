import React from 'react';
import {getClassName} from "../../ui/utils/component";
import People from './People/People'
import Products from './Products/Products'

import "./SidebarR.scss";

import adv from "../../assets/advertisement2.jpg";

const ccn = getClassName("SidebarR");

const SidebarR = (props) => (
    <aside className={ccn()}>

        <div className={ccn("people")}>
            <People />
        </div>
        <div className={ccn("products")}>
            <Products />
        </div>
        <h2 className="ttl">Advertisement</h2>
        <img src={adv} alt="adv" className={ccn("img")} />
        <span className={ccn("site")}>Ads By Denteez.com</span>
    </aside>
);

export default SidebarR;