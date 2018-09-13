import React from "react";
import {getClassName} from "../../../../ui/utils/component";

import "./Company.scss";

import icon1 from "../../../../assets/comp1.png";
import icon2 from "../../../../assets/comp2.png";
import icon3 from "../../../../assets/comp3.png";

const ccn = getClassName("Company");

const companies = [
    {
        id: 0,
        name: "Company Name",
        type: "Manufacturer",
        address: "Belgrade, Serbia",
        link: "/",
        src: icon1
    },
    {
        id: 1,
        name: "Company Name",
        link: "/",
        type: "Service Provider",
        address: "New York, USA",
        src: icon2
    },
    {
        id: 2,
        name: "Company Name",
        link: "/",
        type: "Service Provider",
        address: "London, England",
        src: icon3
    }
];

const Company = props => (
    companies.map(item => (
        <div key={item.id} className={ccn()}>
            <img src={item.src} alt="pic"/>
            <div>
                <p>{item.name}</p>
                <span>{item.type}</span>
                <span>{item.address}</span>
                <a href={item.link}>Follow now</a>
            </div>
        </div>
    ))
);

export default Company;
