import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
    return (
        <Container>
            
            <div className="form mx-auto contact">
            <div className="contact-box">
                <h4>
                    Contact Us, Today
                </h4>
                <p className="pt-1">
                    Please complete the form below or email us direct at duniyapur_cleaning786@hotmail.com or phone number 07444235891, to help with any query.
                </p>
                <p>
                    Within 24 hours we will immediately provide a cleaning proposal to make it nice and easy for you - every time.
                </p>
            </div>
                <div className="formBox">
                    <h4>Feel Free To Contact Us!</h4>

                    <form>
                        <label>Name</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="text" />
                        <label>Phone</label>
                        <br />
                        <input type="number" />
                        <br />
                        <label>Comments</label>
                        <br />
                        <textarea type="text" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
