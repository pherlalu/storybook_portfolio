import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  color: ${({ textColor }) => textColor || "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ddd"};
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
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  &:hover {
    background: ${({ disabled }) =>
      disabled ? null : "linear-gradient(to bottom, #2aaaff, #8dc5f9)"};
  }
`;

export const Button = ({
  backgroundColor,
  size = "medium",
  label,
  disabled,
  textColor,
  hidden,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      disabled={disabled}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hidden={hidden}
    >
      {label}
    </StyledButton>
  );
};
