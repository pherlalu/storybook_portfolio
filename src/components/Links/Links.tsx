import styled from "styled-components";
import { LinkProps } from "./Links.types";
import {
  getColorStyle,
  getCursorStyle,
  getVisibilityStyle,
  getHoverColorStyle,
} from "./Links.lib";

const StyledLinks = styled.a<LinkProps>`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: ${({ color }) => getColorStyle(color)};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${({ disabled }) => getCursorStyle(disabled)};
  visibility: ${({ hidden }) => getVisibilityStyle(hidden)};
  text-decoration: none;

  &:hover {
    color: ${({ disabled, color }) => getHoverColorStyle(disabled, color)};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const Links = (props: LinkProps) => {
  return (
    <StyledLinks {...props} data-testid="LinksElement">
      {props.children}
    </StyledLinks>
  );
};
