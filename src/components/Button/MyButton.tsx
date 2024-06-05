import styled, { css } from "styled-components";
import { ButtonProps } from "./MyButton.types";

const StyledButton = styled.button<ButtonProps>`
  color: ${({ primary }) => (primary ? "white" : "#000")};
  background: ${({ primary, backgroundColor }) =>
    primary ? "#000" : backgroundColor || "transparent"};
  box-shadow: ${({ primary }) =>
    primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  border-radius: 10px;
  border: none;
  margin: 0.5em 1em;
  padding: 0.5em 2em;
  width: ${({ size }) => {
    switch (size) {
      case "small":
        return "120px";
      case "medium":
        return "180px";
      case "large":
        return "240px";
      default:
        return "160px";
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  text-transform: uppercase;
  font-family: Arial, sans-serif;
  font-weight: bold;

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        background: linear-gradient(to bottom, #b4d833, #46d10a);
      `}
  }
`;

export const Button = ({
  primary,
  hover,
  backgroundColor,
  size = "medium",
  label,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      hover={hover}
      disabled={disabled}
      size={size}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledButton>
  );
};
