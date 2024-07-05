import styled from "styled-components";
import { InputProps } from "./InputTextField.types";
import {
  getBackgroundColor,
  getTextColor,
  getDisplayStyle,
} from "./InputTextField.lib";

const StyledInputTextField = styled.input<InputProps>`
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: ${({ disabled, backgroundColor }) =>
    getBackgroundColor(disabled, backgroundColor)};
  color: ${({ disabled, textColor }) => getTextColor(disabled, textColor)};
  display: ${({ hidden }) => getDisplayStyle(hidden)};
  &:focus {
    box-shadow: 0px 0px 5px 0px rgba(0, 123, 255, 0.5);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const InputTextField = ({
  backgroundColor,
  placeholder,
  value,
  disabled,
  hidden,
}: InputProps) => {
  return (
    <StyledInputTextField
      type="text"
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      hidden={hidden}
      data-testid="InputFieldElement"
    />
  );
};
