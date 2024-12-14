import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
    return (
        <Container>
            <div className="services">
                <Row>
                    <Col md="4">
                        <div className="service-card">
                            <div>Domestic & Residentail</div>
                            <div>Door Clean</div>
                            <div>General Clean</div>
                            <div>HouseKeeping Clean</div>
                            <div>Spring Clean</div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="service-card">
                            <div>Floor Clean</div>
                            <div>Builders Service</div>
                            <div>Ironing Service</div>
                            <div>Mini Clean</div>
                            <div>Window Clean</div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="service-card">
                            <div>Event Clean</div>
                            <div>Kitchen Clean</div>
                            <div>Corporate Business Clean</div>
                            <div>Office Cleaning</div>
                            <div>Bathroom Cleaning</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Services;
