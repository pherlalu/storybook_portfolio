import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${({ color }) => color || "#000"};
  font-family: "Roboto", sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const Label = ({
  color,
  backgroundColor,
  disabled,
  hidden,
  children,
}: LabelProps) => {
  return (
    <StyledLabel
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      hidden={hidden}
      data-testid="LabelElement"
    >
      {children}
    </StyledLabel>
  );
};
