import styled from "styled-components";
import { LinkProps } from "./Links.types";

const StyledLinks = styled.a<LinkProps>`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: ${({ color }) => color || "#000"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  background-color: ${(props) => props.bgColor};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  text-decoration: none;

  &:hover {
    color: ${({ disabled, color }) =>
      !disabled ? color || "#3b8026" : "grey"};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const Links = ({
  color,
  bgColor,
  disabled,
  hidden,
  children,
  href,
}: LinkProps) => {
  return (
    <StyledLinks
      href={href}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      hidden={hidden}
      data-testid="LinksElement"
    >
      {children}
    </StyledLinks>
  );
};
