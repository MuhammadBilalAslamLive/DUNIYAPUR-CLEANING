import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

const Questions = () => {
    return (
        <div className="questions">
            <Container>
                <Row>
                    <Col lg="7">
                        <h3>Cleaners in Birmingham and the West Midlands For all Domestic & Commercial Cleaning Services</h3>
                        <strong>Our network of local and reliable domestic and commercial cleaners are hand-picked for YOUR location and services – and delivered at a competitive price, guaranteed.</strong>
                        <p className="pt-1">
                            So you don’t waste your valuable time and money either cleaning yourself or trying to organise other local Birmingham cleaners to provide. It should happen effortlessly, taking the hassle away from you, and making it easy.
                        </p>
                        <ul>
                            <li>
                                <strong> All Domestic & Commercial cleaning services</strong>
                            </li>
                            <li>
                                <strong>
                                    Full spectrum of <span> 14 cleaning services</span>
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    <span>Reliable & proven cleaners</span> from our network
                                </strong>
                            </li>
                            <li>
                                <strong>Covering Birmingham and the West Midlands</strong>
                            </li>
                            <li>
                                <strong>Competitive rates from £10 per hour for ongoing or one-off services</strong>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="form ms-auto">
                            <h4>Have a question or need a proposal? Feel free to send a message and we'll get back within 24 hours.</h4>
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
                                <button type="submit">Request Help Now!</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Questions;
