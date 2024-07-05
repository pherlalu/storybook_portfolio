import styled from "styled-components";
import { ImageProps } from "./Image.types";
import { getOpacityStyle, getDisplayStyle, getCursorStyle } from "./Image.lib";

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
  opacity: ${(props) => getOpacityStyle(props.disabled)};
  display: ${(props) => getDisplayStyle(props.hidden)};
  transition: transform 0.3s;
  cursor: ${(props) => getCursorStyle(props.disabled)};
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
        data-testid="ImageElement"
      />
    </ImageWrapper>
  );
};
