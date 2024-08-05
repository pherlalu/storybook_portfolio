export const getBackgroundColor = (
  disabled?: boolean,
  backgroundColor?: string
) => {
  if (disabled) return "#e0e0e0";
  return backgroundColor || "#f5f5f5";
};

export const getTextColor = (disabled?: boolean, textColor?: string) => {
  return disabled ? "#a0a0a0" : textColor || "#000";
};

export const getDisplayStyle = (hidden?: boolean) =>
  hidden ? "none" : "block";
