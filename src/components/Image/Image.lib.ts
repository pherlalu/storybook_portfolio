export function getOpacityStyle(disabled?: boolean) {
  return disabled ? "0.5" : "1";
}

export function getDisplayStyle(hidden?: boolean) {
  return hidden ? "none" : "block";
}

export function getCursorStyle(disabled?: boolean) {
  return disabled ? "not-allowed" : "pointer";
}
