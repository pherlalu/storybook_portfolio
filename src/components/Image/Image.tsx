// Image.tsx
import styled from "styled-components";
import { ImageProps } from "./Image.types";

// Define ImageWrapperProps in this file
interface ImageWrapperProps {
  bgColor: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => (!props.hidden ? "0px" : "10px")};
`;

const StyledImg = styled.img<ImageProps>`
  width: ${(props) => `${props.size}px`};
  height: auto;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  display: ${(props) => (props.hidden ? "none" : "block")};
  transition: transform 0.3s;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: ${(props) => (!props.disabled ? "scale(1.1)" : "none")};
  }
`;

export const Image: React.FC<ImageProps & ImageWrapperProps> = ({
  src,
  alt,
  disabled,
  size,
  hidden,
  bgColor,
}) => {
  return (
    <ImageWrapper bgColor={bgColor}>
      <StyledImg
        src={src}
        alt={alt}
        disabled={disabled}
        size={size}
        hidden={hidden}
      />
    </ImageWrapper>
  );
};
