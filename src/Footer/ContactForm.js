import React from 'react';
import FormError from './FormError';
import { onErrorResumeNext } from 'rxjs/operators';
import GlobalConstant from '.././config/config';
import {DataService} from '../services/api.js';

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                link: '#',
                name: null,
                email: null,
                subject: null,
                message: null,
                errors: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                valid: false
            };
        //creating instance of data servicce
        this.dataService = new DataService();
        //this.validateForm = this.validateForm.bind();
        //this.handleSubmit = this.handleSubmit.bind();
        //this.handleChange  = this.handleChange.bind(event);
    }

    //Method to handle the change on any form field
    handleChange = (event) => {

        event.preventDefault();
        console.log("Input field change event handled");
        const { name, value } = event.target;
        this.setState({[name]: value});

        let validated = this.validateForm(event);
        this.setState({valid:validated});

        if(validated) {
            console.log('Validaton check passed');
            
        }else{
            console.log('Validaton check failed');
        }
    }

    //Handling things after the form submission
    handleSubmit = (event) => {

        event.preventDefault();
        console.log(["Form submit click event worked =>", this.state]);
        if(this.validateForm(event)) {
            console.log('Validaton check passed');
            this.submitFormData(this.state);
        }else{
            console.log('Validaton check failed');
        }
    }


    validateForm = (event) => {

        event.preventDefault();
        console.log(" validate form method worked!");
        const { name, value } = event.target;
        let errors = this.state.errors;
        let caseName = name;
        //console.log([name, value]);
        let isValidationPass = true;

        switch(caseName){

            case 'name' :
                errors.name = (value.length < 5) ? 'Name must be of atleast 5 char' : '';
                console.log('Name validation check executed');
                if(errors.name!=''){
                    isValidationPass = false;
                }
                break;
            case 'email' :
                var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                console.log('email validation check executed');
                errors.email = (!emailValid) ? 'Please enter valid email id' : '';
                if(errors.email!=''){
                    isValidationPass = false;
                }
                break;
            case 'subject' :
                errors.subject = (value.length < 5) ? 'Subject must be of atleast 5 char' : '';
                console.log('subject validation check executed');
                if(errors.subject!=''){
                    isValidationPass = false;
                }
                break;
            case 'message' :
                errors.message = (value.length < 5) ? 'Message must be of atleast 5 char' : '';
                console.log('subject validation check executed');
                if(errors.message!=''){
                    isValidationPass = false;
                }
                break;
        }
        return isValidationPass;
    }


    submitFormData = (formData) => {

        console.log("Submit form data method started");
        console.log(formData);
        let url = GlobalConstant.API_URL + GlobalConstant.CONTACT;
        let reqBody = {
            name : formData.name,
            email : formData.email,
            subject : formData.subject,
            message : formData.message
        };
        console.log(['reBody', url, reqBody])
        //event.preventDefault();
        this.subscription = this.dataService.postDataToAPI(url, reqBody).subscribe(resData => {
                if(resData){
                    console.log(['Form submitted successfully', ]);
                }
            },
            err => console.error(err)
        );
    }

    render(){
        return  (<div className="col-lg-6 wow fadeInUp delay-06s">
                    <div className="form">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control input-text" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={(event) => this.handleChange(event)} />
                                <div className="validation">{this.state.errors.name}</div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control input-text" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={(event) => this.handleChange(event)}/>
                                <div className="validation">{this.state.errors.emal}</div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-text" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={(event) => this.handleChange(event)}/>
                                <div className="validation">{this.state.errors.subject}</div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" onChange={(event) => this.handleChange(event)}></textarea>
                                <div className="validation">{this.state.errors.message}</div>
                            </div>

                            <button type="submit" className="btn input-btn" validate={this.state.valid} onClick={this.handleSubmit}>SEND MESSAGE</button>
                        </form>
                        <FormError errors={{'msg':"null"}}/>
                    </div>
                </div>);
    }
}

export default ContactForm;