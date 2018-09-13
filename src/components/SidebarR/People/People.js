import React from 'react';
import {getClassName} from "../../../ui/utils/component";
import Wrap from '../../../hoc/Wrap'
import Person from './Person/Person'

import "./People.scss";

const ccn = getClassName("People");

const People = (props) => (
    <Wrap>
        <div className={ccn("top")}>
            <h2 className="ttl">People you may know</h2>
            <a href="/" className="lnk">See All</a>
        </div>
        <Person />
    </Wrap>
);

export default People;