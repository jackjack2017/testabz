import  React from 'react';
import { getClassName } from "../../../../ui/utils/component";

import "./ServicesError.scss";

import icon from '../../../../assets/error.png'

const ccn = getClassName("ServicesError");

const servicesError = (props) => (
    <div className={ccn()}>
        <h2>WHOOOPS!</h2>
        <p>Something went wrong: <br/><span>{props.error}</span></p>
        <img src={icon} alt="error"/>
    </div>
);

export default servicesError;