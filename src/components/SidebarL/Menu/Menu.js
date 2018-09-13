import React from "react";
import { Link } from 'react-router-dom';

import "./Menu.scss";

import icon1 from "../../../assets/men1.png";
import icon2 from "../../../assets/men2.png";
import icon3 from "../../../assets/men3.png";
import icon4 from "../../../assets/men4.png";
import icon5 from "../../../assets/men5.png";
const items = [
    {
        id: 0,
        title: "Feed",
        link: "/",
        src: icon1
    },
    {
        id: 1,
        title: "Ask a Colleague",
        link: "/",
        src: icon2
    },
    {
        id: 2,
        title: "Companies",
        link: "/",
        src: icon3
    },
    {
        id: 3,
        title: "Service Directory",
        link: "/",
        src: icon4
    },
    {
        id: 4,
        title: "Contacts",
        link: "/contacts",
        src: icon5
    }
];

const Menu = props => (
    items.map(item => (
        <li key={item.id}>
            <Link to={item.link}>
                <img src={item.src} alt="icon"/>
                {item.title}
            </Link>
        </li>
    ))
);

export default Menu;
