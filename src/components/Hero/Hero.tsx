import React from "react";
import styled from "styled-components";
import Typing from "react-typing-effect";
import Navbar from "../Navbar/Navbar"; // Ensure the correct path to Navbar component

interface HeroProps {
  videoSrc: string;
  description: string;
}

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

const TypingText = styled.div`
  position: absolute;
  top: 85%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

export const Hero: React.FC<HeroProps> = ({ videoSrc, description }) => {
  return (
    <StyledHero>
      <StyledNavbar>
        <Navbar />
      </StyledNavbar>
      <Video src={videoSrc} autoPlay loop muted />
      <TypingText>
        <Typing
          text={[
            description,
            "Your Go-To Full Stack Developer!😸",
            "Just ping me! Anytime! with your awesome ideas!💡",
          ]}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
      </TypingText>
    </StyledHero>
  );
};

export default Hero;
