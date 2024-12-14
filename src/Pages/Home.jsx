import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import Questions from "../components/Question";
import Bagdes from "../components/Badges";
import Help from "../components/Help";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Questions />
            <Bagdes />
            <Help />
        </>
    );
};

export default Home;
