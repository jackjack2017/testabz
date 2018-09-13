import React, { Component } from 'react';
import { getClassName } from "../../../ui/utils/component";
import axios from 'axios';
import Wrap from '../../../hoc/Wrap'
import Modal from "../../../ui/Modal/Modal";
import ServicesError from './ServicesError/ServicesError'

import "./Services.scss";

const ccn = getClassName("Services");

export class Services extends Component {

    state = {
      services:  [],
      errorTxt: ''
    };

    componentDidMount() {

        let config = {
            headers: {
                'Authorization': "16bc226cab04bb91663aed2aa0fa1c5fbb964c2a"
            }
        };

        axios.get('http://504080.com/api/v1/services/categories', config)
            .then(response => {
                this.setState({
                    services: response.data.data
                })
            })
            .catch(error => {
                this.setState({
                    errorTxt: `${error}`
                });
                this.showPopup();
            });
    }

    showPopup() {
        let popup = document.getElementById("popup");
        let backdrop = document.getElementById("backdrop");

        popup.classList.add("show");
        backdrop.classList.add("show");
    }

    closeModal = () => {
        let popup = document.getElementById("popup");
        let backdrop = document.getElementById("backdrop");

        this.setState = {
            errorTxt: ''
        };
        console.log("click");

        popup.classList.remove("show");
        backdrop.classList.remove("show");

    };

    render() {

        const services = this.state.services.map(service => {
            return (
                <a href={service.icon} key={service.id} className={ccn("card")}>
                    <div className={ccn("imgWrap")}>
                        <img src={service.icon} alt="icon"/>
                    </div>
                    <div className={ccn("ttlWrap")}>
                        <h2>{service.title}</h2>
                    </div>
                </a>
            )
        });

        return (
            <Wrap>
                <Modal modalClose={this.closeModal}>
                    <ServicesError error={this.state.errorTxt} />
                </Modal>
                <main>
                    <div className={ccn("top")}>
                        <h1 className={ccn("ttl")}>Service Directory</h1>
                        <div className={ccn("btnWrap")}>
                            <a href="/" className="btn">Add New Service</a>
                        </div>
                    </div>
                    <div className={ccn("blk")}>
                        {services}
                    </div>
                </main>
            </Wrap>
        )
    }

}