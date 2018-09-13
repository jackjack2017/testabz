import  React from 'react';
import { getClassName } from "../../ui/utils/component";

import "./Backdrop.scss";

const ccn = getClassName("Backdrop");

const backdrop = (props) => (
    <div
        className={ccn()}
        onClick={props.clicked}
        id="backdrop"></div>
);

export default backdrop;