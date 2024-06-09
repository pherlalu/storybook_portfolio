import styled from "styled-components";
import { InputProps } from "./InputTextField.types";

export const InputTextField = styled.input<InputProps>`
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#fafafa" : backgroundColor};
  color: ${({ disabled, textColor }) => (disabled ? "#cbcbcb" : textColor)};
  display: ${({ hidden }) => (hidden ? "block" : "none")};
  &:focus {
    box-shadow: 0px 0px 5px 0px rgba(0, 123, 255, 0.5);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
