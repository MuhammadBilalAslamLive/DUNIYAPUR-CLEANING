import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <p>Cleaners in Birmingham Connections Sitemap Privacy Policy Terms & Conditions Review </p>
                            <p>Duniyapur cleaners - 199 Highfield Road Saltly Birmingham B8 3QP</p>
                            <p className="pink">07444235891 duniyapur_cleaning786@hotmail.com</p>
                            <p className="pink">07377769463 noreen_rizwan229@hotmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
