import React from 'react';
import {getClassName} from "../../../ui/utils/component";
import Wrap from '../../../hoc/Wrap'
import Company from './Company/Company'

import "./Companies.scss";

const ccn = getClassName("Companies");

const Companies = (props) => (
    <Wrap>
        <div className={ccn("top")}>
            <h2 className="ttl">Featured Companies</h2>
            <a href="/" className="lnk">See All</a>
        </div>
        <Company />
    </Wrap>
);

export default Companies;