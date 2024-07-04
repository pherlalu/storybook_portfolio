import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";
import { getColorStyle, getCursorStyle, getVisibilityStyle } from "./Text.lib";

const StyledText = styled.p<TextProps>`
  font-family: "Montserrat", sans-serif;
  color: ${({ color = "#000" }) => getColorStyle(color)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => getCursorStyle(disabled)};
  visibility: ${({ hidden }) => getVisibilityStyle(hidden)};
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

export const Text = (props: TextProps) => {
  return (
    <StyledText {...props} data-testid="TextElement">
      {props.children}
    </StyledText>
  );
};
