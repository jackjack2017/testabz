import React from "react";
import {getClassName} from "../../../../ui/utils/component";

import "./Person.scss";

import icon1 from "../../../../assets/peop1.png";
import icon2 from "../../../../assets/peop2.png";
import icon3 from "../../../../assets/peop3.png";

const ccn = getClassName("Person");

const people = [
    {
        id: 0,
        name: "Dennis Adams",
        position: "Dentist (Practice Owner)",
        address: "London, England",
        link: "/",
        src: icon1
    },
    {
        id: 1,
        name: "Mary Carpenter",
        position: "Dentist (Practice Owner)",
        address: "Belgrade, Serbia",
        link: "/",
        src: icon2
    },
    {
        id: 2,
        name: "Danielle Salazar",
        position: "Dentist (Practice Owner)",
        address: "Paris, France",
        link: "/",
        src: icon3
    }
];

const Person = props => (
    people.map(item => (
        <div key={item.id} className={ccn()}>
            <h2>{item.name}</h2>
            <div className={ccn("txtBlk")}>
                <img src={item.src} alt="pic"/>
                <div>
                    <span>{item.position}</span>
                    <span>{item.address}</span>
                    <a href={item.link}>Add Friend</a>
                </div>
            </div>
        </div>
    ))
);

export default Person;
