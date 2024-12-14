import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

const Bagdes = () => {
    return (
        <div className="badges">
            <Container>
                <div className="d-flex justify-content-center tick">
                    <img src="https://easycleanersbirmingham.co.uk/images/yellow-tick.png" />
                    <span className="text1">QUALITY-SERVICE</span>
                    <span>– years of cleaning experience, full accreditation, and a friendly yet professional approach</span>
                </div>
                <div className="d-flex justify-content-center my-2 tick">
                    <img src="https://easycleanersbirmingham.co.uk/images/yellow-tick.png" />
                    <span className="text1">FULL COVER</span>
                    <span>– every domestic & commercial cleaning service across Birmingham & the Midlands</span>
                </div>
                <div className="d-flex justify-content-center tick">
                    <img src="https://easycleanersbirmingham.co.uk/images/yellow-tick.png" />
                    <span className="text1">BEST VALUE</span>
                    <span>– fair hourly rates and total cost around your specific cleaning needs, guaranteed</span>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center bages-img">
                    <img src="https://easycleanersbirmingham.co.uk/images/cwv/safe-contractor.png" alt="" />
                    <img src="https://easycleanersbirmingham.co.uk/images/cwv/insurance-easy-cleaners.png" alt="" />
                    <img src="https://easycleanersbirmingham.co.uk/images/cwv/guarantee-easy-cleaners.png" alt="" />
                    <img src="https://easycleanersbirmingham.co.uk/images/cwv/dbs-checked.png" alt="" />
                    <img src="https://easycleanersbirmingham.co.uk/images/cwv/covid-19-circle.png" alt="" />
                    <img src="https://easycleanersbirmingham.co.uk/images/living-wage-easy-cleaners.png" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Bagdes;
