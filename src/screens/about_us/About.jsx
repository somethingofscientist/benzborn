import React from "react";
// import styles from "./About.module.css";
import Footer from '../../components/home_compo/footer/Footer'
import Marquee from "../../components/about_compo/MarqueeHistory/MarqueeHistory";
import Team from "../../components/about_compo/team/Team";
import Environment from "../../components/about_compo/environment/Environment";
import Award from "../../components/about_compo/award/Award";
import Working from "../../components/about_compo/benefit/Working";
import Trusted_partner from "../../components/about_compo/trusted/Trusted_partner";
import Contact from "../../components/home_compo/contact_us_button/Contact";
import Sticky_header from "../../components/about_compo/sticky_header/Sticky_header";
import Heading from "../../components/about_compo/heading_header/Heading";
import Navbar from "../../components/home_compo/navbar/Navbar";

const About = () => {
  return (
    <>
      <Heading />
      <Sticky_header />
      <Trusted_partner />
      <Marquee />
      <Working />
      <Award />
      <Environment />
      <Team />
    </>
  );
};

export default About;
