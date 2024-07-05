import styled from "styled-components";
import { LabelProps } from "./Label.types";
import { getCursorStyle, getVisibilityStyle } from "./Label.lib";

const StyledLabel = styled.label<LabelProps>`
  color: ${({ color }) => color || "#000"};
  font-family: "Roboto", sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => getCursorStyle(disabled)};
  visibility: ${({ hidden }) => getVisibilityStyle(hidden)};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const Label = (props: LabelProps) => {
  return (
    <StyledLabel {...props} data-testid="LabelElement">
      {props.children}
    </StyledLabel>
  );
};
