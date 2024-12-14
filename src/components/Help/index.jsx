import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

const Help = () => {
    return (
        <div className="help">
            <Container>
                <Row>
                    <Col lg="7">
                        <div className="helpBox">
                            <h3>How we help</h3>
                            <p>We cover every aspect of domestic and commercial cleaning services you can muster up, from basic dusting and surface-wiping to vacuum cleaning and floor mopping.</p>
                            <p>
                                This is always worked around you, with full sick and holiday cover, and emergency temporary backup cover. And whether weekly or fortnight regular cover, at evenings and weekends rather than during the day, and at
                                cleaning scheduled times and access arrangements to suit.
                            </p>
                            <p>Plus a whole host of additional bolt-on cleaning services in and around Birmingham, such as carpet cleaning, window cleaning, oven cleaning, and specific areas like kitchens and bathrooms.</p>
                            <p>
                                And this isn’t rotating cleaners like other cleaning companies; we’ll make sure they’re as regular as a clockwork, and any changes first agreed on bv you and your superiors. With regular monitoring and the Ops Manager
                                always to hand, every issue will be dealt with.
                            </p>
                            <p>
                                We simply won’t be beaten by price, guaranteed! With hourly rates starting from £15 per hour, we can even agree on smaller time slots like hourly cleans alongside other instructions to fit around your budget and
                                building.
                            </p>
                            <p>Simply everywhere in Birmingham and beyond is covered by our network of cleaners, whether into the Black Country, and wider West Midland areas.</p>
                        </div>
                    </Col>
                    <Col lg="5">
                        <div className="cover">
                            <h3>What we cover</h3>
                            <p>
                                We cover every aspect of domestic and commercial cleaning services you can muster up, from basic dusting and surface-wiping to vacuum cleaning and floor mopping. This is always worked around you, with full sick and
                                holiday cover and emergency temporary backup cover. And whether weekly or fortnight regular cover, at evenings and weekends rather than during the day, and at cleaning scheduled times and access arrangements to suit.
                                Plus a whole host of additional bolt-on cleaning services in and around Birmingham, Black Country and West Midlands, such as carpet cleaning, window cleaning, oven cleaning, and specific areas like kitchens and
                                bathrooms. And this isn’t rotating cleaners like other cleaning companies; we’ll make sure they’re as regular as clockwork, and any changes first agreed on by you and your superiors. With regular monitoring and the Ops
                                Manager always to hand, every issue will be dealt with.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Help;
