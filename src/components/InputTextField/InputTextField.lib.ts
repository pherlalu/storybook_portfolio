export function getBackgroundColor(
  disabled?: boolean,
  backgroundColor?: string
) {
  return disabled ? "#fafafa" : backgroundColor;
}

export function getTextColor(disabled?: boolean, textColor?: string) {
  return disabled ? "#cbcbcb" : textColor;
}

export function getDisplayStyle(hidden?: boolean) {
  return hidden ? "none" : "block";
}
