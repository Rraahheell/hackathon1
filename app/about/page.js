// About Us Component
import BigCompanies from "@/components/BigCampanies";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/aboutus/Hero";
import Intro from "@/sections/aboutus/Intro";
import OurTeam from "@/sections/aboutus/OurTeam";
import Stats from "@/sections/aboutus/Stats";
import Video from "@/sections/aboutus/Video";
import WorkWithUs from "@/sections/aboutus/WorkWithUs";
import React from "react";

const AboutUs = () => {
    return (
        <div className="about-us">
            <Navbar />
            <Hero />
            <Intro />
            <Stats />
            <Video />
            <OurTeam />
            <BigCompanies />
            <WorkWithUs />
        </div>
    );
};

export default AboutUs;
