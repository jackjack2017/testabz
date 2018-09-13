import React from 'react';
import {ContactsHeader} from "./Header/Header";
import {ContactsFooter} from "./Footer/Footer";
import {ContactsForm} from "./Form/Form";
import {getClassName} from "../../ui/utils/component";

import "./Contacts.scss";

const ccn = getClassName("Contacts");

const contacts = props => (

    <section className={ccn()}>
        <div className={ccn("content")}>
            <ContactsHeader/>
            <div className={ccn("top")}>
                <div className={ccn("txtBlk")}>
                    <h1>Home of Dentistry</h1>
                    <p>Denteez was created by dentists for dentistry in order to
                        make the life of everyone involved in dentistry easier.</p>
                </div>
            </div>
            <div className={ccn("formBlk")}>
                <ContactsForm />
            </div>
            <div className={ccn("about")}>
                <div className="container-l">
                    <div className={ccn("aboutBlk")}>
                        <h2>About Denteez</h2>
                        <div className={ccn("aboutTxt")}>
                            <p>Why is it always so difficult to find what you are looking for in dentistry? Whether it is the
                                latest advancement in technology or techniques or simply a review or understanding of the vast
                                amount of products? Perhaps finding someone to just fix your broken equipment or simply hiring
                                new staff or looking for that new job? </p>
                            <p>Our mission is to give every dental professional the possibility to discuss and share all aspects
                                of their profession, their practice and their business. We aim to make the world of dentistry
                                easy and accessible, so every dental professional can find what they are looking for quickly and
                                easily all in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactsFooter/>
        </div>
    </section>
);

export default contacts;