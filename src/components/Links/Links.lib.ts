export function getColorStyle(color?: string) {
  return color || "#000";
}

export function getCursorStyle(disabled?: boolean) {
  return disabled ? "not-allowed" : "default";
}

export function getVisibilityStyle(hidden?: boolean) {
  return hidden ? "hidden" : "visible";
}

export function getHoverColorStyle(disabled?: boolean, color?: string) {
  return !disabled ? color || "#3b8026" : "grey";
}
