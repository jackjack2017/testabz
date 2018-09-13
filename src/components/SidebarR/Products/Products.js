import React from 'react';
import {getClassName} from "../../../ui/utils/component";
import Wrap from '../../../hoc/Wrap'
import Product from './Product/Product'

import "./Products.scss";

const ccn = getClassName("Products");

const Products = (props) => (
    <Wrap>
        <div className={ccn("top")}>
            <h2 className="ttl">Featured Products</h2>
            <a href="/" className="lnk">See All</a>
        </div>
        <Product />
    </Wrap>
);

export default Products;