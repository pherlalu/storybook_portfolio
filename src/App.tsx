import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import videoPort from "./assets/video_portfolio.mp4";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

const socialLinks = [
  { href: "https://twitter.com/PHERLALU", icon: FaTwitter },
  { href: "https://www.instagram.com/panyangamper/", icon: FaInstagram },
  { href: "https://github.com/pherlalu", icon: FaGithub },
  { href: "https://www.linkedin.com/in/steffi-amper/", icon: FaLinkedin },
];

const galleryImages = [
  "https://picsum.photos/400/400?random=1",
  "https://picsum.photos/400/400?random=2",
  "https://picsum.photos/400/400?random=3",
  "https://picsum.photos/400/400?random=4",
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero videoSrc={videoPort} description="Hello I am Steffi! 😉" />
              <About
                description="I love software development! That's for sure! 🫶"
                moreInfo1="For the past 8  years, I’ve been privileged to work in the field of software development. During this time, I’ve had the opportunity to engage with a variety of software platforms, including mobile applications, desktop applications, and web applications."
                moreInfo2="While I’ve gained a fair amount of experience in software development, I’m always aware that there’s so much more to learn. I’ve been able to deliver software solutions on time and have become familiar with several programming languages such as Javascript, React, VueJS, PHP, Java, among others. I’ve also had the chance to be expose into software development methodologies like Agile and Scrum."
                moreInfo3="One of the aspects I value most about my work is the opportunity to understand client needs and translate them into software solutions. I’ve been involved in all stages of the software development lifecycle, from the initial concept and design to testing, deployment, and maintenance."
                moreInfo4="I’ve had some exposure to modern frameworks and technologies such as ReactJS and VueJS in the area of web application development. I strive to create responsive and intuitive web applications that can enhance user experience and contribute to business growth."
                moreInfo5="Collaboration is something I truly enjoy, and I appreciate the chance to work with others. I’m always eager to learn new technologies to keep up with the rapidly evolving software industry. I hope that my dedication, technical skills, and passion for software development can be a positive contribution to any team."
                socialLinks={socialLinks}
                galleryImages={galleryImages}
              />
              <Portfolio />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
              <Projects />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
