import React from "react";
import styled from "styled-components";
import Typing from "react-typing-effect";
import Navbar from "../Navbar/Navbar";
import noVideo from "../../assets/no-video.jpg";

// Define the props interface
interface HeroProps {
  disabled?: boolean;
  videoSrc?: string;
  description?: string;
}

// Styled components
const StyledHero = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  display: ${(props) => (props.disabled ? "flex" : "block")};
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 75vh;
  }
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

  @media (max-width: 768px) {
    height: auto;
    top: 50%;
  }
`;

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TypingText = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 75%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    top: 70%;
  }
`;

const NoVideoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

// Use the props in the functional component
export const Hero: React.FC<HeroProps> = ({
  videoSrc,
  description,
  disabled,
}) => {
  if (disabled) {
    return (
      <StyledHero disabled={disabled}>
        <NoVideoImage src={noVideo} alt="No video available" />
      </StyledHero>
    );
  }

  return (
    <StyledHero disabled={disabled}>
      <StyledNavbar className="navbar">
        <Navbar />
      </StyledNavbar>
      <Video src={videoSrc} autoPlay loop muted data-testid="HeroVideo" />
      <TypingText className="typing-text">
        <Typing
          text={[
            description || "",
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
