import  React from 'react';
import { getClassName } from "../../ui/utils/component";
import Wrap from '../../hoc/Wrap'
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.scss";

const ccn = getClassName("Modal");

const modal = (props) => (
    <Wrap>
        <Backdrop clicked={props.modalClose}/>
        <div
            className={ccn()}
            id="popup">
            <span className={ccn("close")} onClick={props.modalClose}></span>
            {props.children}
        </div>
    </Wrap>
);

export default modal;