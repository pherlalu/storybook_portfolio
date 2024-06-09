import styled from "styled-components";
import { LabelProps } from "./Label.types";

export const Label = styled.label<LabelProps>`
  color: ${({ color }) => color || "#000"};
  font-family: "Roboto", sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
