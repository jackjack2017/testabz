import React from "react";
import {getClassName} from "../../../../ui/utils/component";

import "./Product.scss";

import icon1 from "../../../../assets/prod1.png";
import icon2 from "../../../../assets/prod2.png";

const ccn = getClassName("Product");

const products = [
    {
        id: 0,
        name: "Product Name",
        description: "Product Short Description.The quick brown fox jumps over the lazy dog.",
        link: "/",
        src: icon1
    },
    {
        id: 1,
        name: "Product Name",
        description: "Product Short Description.The quick brown fox jumps over the lazy dog.",
        link: "/",
        src: icon2
    }
];

const Product = props => (
    products.map(item => (
        <a href={item.link} key={item.id} className={ccn()}>
            <h2>{item.name}</h2>
            <div className={ccn("txtBlk")}>
                <img src={item.src} alt="pic"/>
                <span>{item.description}</span>
            </div>
        </a>
    ))
);

export default Product;
