import React, { Component } from "react";
import { getClassName } from "../../../ui/utils/component";

import "./Footer.scss";

const ccn = getClassName("ContactsFooter");

const items = [
    {
        id: 0,
        title: "Support",
        link: "/"
    },
    {
        id: 1,
        title: "Privacy Policy",
        link: "/"
    },
    {
        id: 2,
        title: "Terms of use",
        link: "/"
    }
];

export class ContactsFooter extends Component {
    render() {
        return (
            <footer className={ccn()}>
                <div className="container-l">
                  <div className={ccn("blk")}>
                      <span>Denteez Copyright 2015</span>
                      <ul>
                      {items.map(item => (
                          <li key={item.id}>
                              <a href={item.link}>
                                  {item.title}
                              </a>
                          </li>
                      ))}
                      </ul>
                  </div>
                </div>
            </footer>
        );
    }
}

