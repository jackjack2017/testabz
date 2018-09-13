import React, {Component} from "react";
import {getClassName} from "../../../ui/utils/component";
import axios from "axios";
import Select from 'react-select';
import ImageUploader from 'react-images-upload';

import "./Form.scss";


const ccn = getClassName("ContactsForm");

export class ContactsForm extends Component {

    state = {
        options: [],
        pictures: [],
        picturesError: '',
        selectedOption: null,
        selectError: false,
        showInput: false,
        otherType: '',
        descriptionCount: 0,
        description: '',
        descriptionError: false,
        email: '',
        emailError: false,
        subject: '',
        subjectError: false,
        name: '',
        nameError: false
    };

    componentDidMount() {

        let config = {
            headers: {
                'Authorization': "16bc226cab04bb91663aed2aa0fa1c5fbb964c2a"
            }
        };

        axios.get('http://504080.com/api/v1/directories/enquiry-types', config)
            .then(response => {

                let newOptions = response.data.data.map(item => {
                    return {
                        value: item.name.toLowerCase(),
                        label: item.name
                    }
                });

                this.setState({
                    options: newOptions
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    handleSelectChange = (selectedOption) => {

        let inputSelect = document.getElementById("select");
        inputSelect.classList.remove('error');

        this.setState(
            {
                selectedOption,
                selectError: false

            }
        );

        if (selectedOption.value === 'other') {
            this.setState({showInput: true});
        } else {
            this.setState({showInput: false});
        }
    };

    handledDescriptionChange = (e) => {

        if (e.target.value.length > 1000) {
            e.target.classList.add('error');
            this.setState(
                {
                    description: '',
                    descriptionCount: 0,
                    descriptionError: true
                }
            );
        } else {
            e.target.classList.remove('error');
            this.setState(
                {
                    description: e.target.value,
                    descriptionCount: e.target.value.length,
                    descriptionError: false
                }
            );
        }
    };

    handledEmailChange = (e) => {

        let rg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!rg.test(String(e.target.value).toLowerCase())) {
            e.target.classList.add('error');
            this.setState(
                {
                    email: '',
                    emailError: true
                }
            );
        } else {
            e.target.classList.remove('error');
            this.setState(
                {
                    email: e.target.value,
                    emailError: false
                }
            );
        }
    };

    handledNameChange = (e) => {

        e.target.classList.remove('error');

        this.setState(
            {
                name: e.target.value,
                nameError: false
            }
        );
    };

    handledOtherChange = (e) => {

        this.setState(
            {
                otherType: e.target.value
            }
        );
    };

    handledSubjectChange = (e) => {

        e.target.classList.remove('error');

        this.setState(
            {
                subject: e.target.value,
                subjectError: false
            }
        );
    };

    onDrop = (picture) => {

        let errorBlk = document.querySelector('.errorsContainer');
        let closeBtn = document.querySelector('.deleteImage');

        if(closeBtn) {

            closeBtn.innerText = '';

            closeBtn.onclick = () =>{
                this.setState({
                    pictures: [],
                });

                errorBlk.innerHTML = '';
            };
        }

        if(errorBlk.childElementCount > 1) {
            errorBlk.innerHTML = `<div className="errorMessage ">The photo does not meet the requirements</div>`;
        }

        this.setState({
            pictures: this.state.pictures.concat(picture[0]),
        });
    };

    submitForm = (e) => {

        e.preventDefault();

        if(this.state.selectedOption === null) {
            let inputSelect = document.getElementById("select");
            inputSelect.classList.add('error');

            this.setState(
                {
                    selectError: true
                }
            );

        } else if(this.state.name === '') {
            let inputName = document.getElementById("name");
            inputName.classList.add('error');

            this.setState(
                {
                    nameError: true
                }
            );
        } else if(this.state.email === '') {
            let inputEmail = document.getElementById("email");
            inputEmail.classList.add('error');

            this.setState(
                {
                    emailError: true
                }
            );
        } else if(this.state.subject === '') {
            let inputSubject = document.getElementById("subject");
            inputSubject.classList.add('error');

            this.setState(
                {
                    subjectError: true
                }
            );
        } else if(this.state.description === '') {
            let inputDescription = document.getElementById("description");
            inputDescription.classList.add('error');

            this.setState(
                {
                    descriptionError: true
                }
            );
        } else if(this.state.pictures.length === 0) {

            let errorBlk = document.querySelector('.errorsContainer');

            errorBlk.innerHTML = `<div className="errorMessage ">The photo does not meet the requirements</div>`;
        } else {
            let config = {
                headers: {
                    'Authorization': "16bc226cab04bb91663aed2aa0fa1c5fbb964c2a"
                }
            };

            let data = {
                enquiry_type: this.state.selectedOption,
                otherType: this.state.otherType,
                description: this.state.description,
                email: this.state.email,
                subject: this.state.subject,
                user_name: this.state.name,
                pictures: this.state.pictures
            };

            axios({
                method: 'post',
                url: 'http://504080.com/api/v1/support',
                data: data,
                config: config
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {

        const {selectedOption} = this.state;

        return (
            <form className={ccn()} onSubmit={this.submitForm}>
                <div className={ccn("body")}>
                    <p className={ccn("note")}>Fields marked “*” are required</p>
                    <div className="inpWrap">
                        <label htmlFor="select">
                            <span>Enquiry Type*</span>
                            <Select
                                value={selectedOption}
                                onChange={this.handleSelectChange}
                                options={this.state.options}
                                classNamePrefix="Select"
                                id="select"/>
                            {this.state.selectError &&
                                <span className="error"> The select field shouldn't be empty</span>
                            }
                        </label>
                    </div>
                    {this.state.showInput &&
                    <div className="inpWrap">
                        <input type="text" placeholder="Other" onChange={this.handledOtherChange} />
                    </div>
                    }
                    <div className="inpGroup">
                        <div className="inpWrap sm">
                            <label htmlFor="name">
                                <span>Name*</span>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.handledNameChange}
                                    placeholder="Dentist"/>
                            </label>
                            {this.state.nameError &&
                                <span className="error"> The name field shouldn't be empty</span>
                            }
                        </div>
                        <div className="inpWrap sm">
                            <label htmlFor="email">
                                <span>Email*</span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="rachelm@gmail.com"
                                    onChange={this.handledEmailChange}/>
                            </label>
                            {this.state.emailError &&
                                <span className="error"> Please enter a valid email address!</span>
                            }
                        </div>
                    </div>
                    <div className="inpWrap">
                        <label htmlFor="subject">
                            <span>Subject*</span>
                            <input
                                type="text"
                                name="subject"
                                onChange={this.handledSubjectChange}
                                id="subject" />
                        </label>
                        {this.state.subjectError &&
                            <span className="error"> The subject field shouldn't be empty</span>
                        }
                    </div>
                    <div className="inpWrap">
                        <label htmlFor="description">
                            <p>
                                <span>Description*</span>
                                <span>{this.state.descriptionCount}/1000</span>
                            </p>
                            <textarea name="description" id="description" rows="5" cols="30"
                                      onChange={this.handledDescriptionChange} />
                            {this.state.descriptionError &&
                                <span className="error">The description length should be less then 1000 characters and shouldn't be empty</span>
                            }
                        </label>
                    </div>
                    <div className="inpWrap">
                        <ImageUploader
                            withIcon={false}
                            withPreview={true}
                            withLabel={true}
                            accept={"accept=image/*"}
                            singleImage={true}
                            buttonText='Add photo'
                            label="Minimum size of 300x300 jpeg ipg png 5 MB"
                            fileSizeError="The photo does not meet the requirements"
                            fileTypeError="The photo does not meet the requirements"
                            onChange={this.onDrop}
                            maxFileSize={5242880}
                        />
                    </div>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        );
    }
}

