import React from "react";
import styled from "styled-components";
import { TextareaProps } from "./Textarea.types";
import {
  getBackgroundColor,
  getTextColor,
  getDisplayStyle,
} from "./Textarea.lib";

// Styled component
const StyledTextarea = styled.textarea<TextareaProps>`
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
  resize: vertical;
  min-height: 100px;
  &:focus {
    box-shadow: 0px 0px 5px 0px rgba(0, 123, 255, 0.5);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

// Textarea component
export const Textarea: React.FC<TextareaProps> = ({
  backgroundColor,
  placeholder,
  value,
  disabled,
  hidden,
  onChange,
}) => {
  return (
    <StyledTextarea
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      hidden={hidden}
      onChange={onChange}
      data-testid="TextareaElement"
    />
  );
};

export default Textarea;
