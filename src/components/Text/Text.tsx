import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  font-family: "Montserrat", sans-serif;
  color: ${({ color }) => color || "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 1rem;
        `;
      case "medium":
        return css`
          font-size: 1.2rem;
        `;
      case "large":
        return css`
          font-size: 1.4rem;
        `;
      default:
        return css`
          font-size: 1.2rem;
        `;
    }
  }}
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const Text = ({
  color,
  backgroundColor,
  disabled,
  hidden,
  size,
  bold,
  children,
}: TextProps) => {
  return (
    <StyledText
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      hidden={hidden}
      size={size}
      bold={bold}
      data-testid="TextElement"
    >
      {children}
    </StyledText>
  );
};
