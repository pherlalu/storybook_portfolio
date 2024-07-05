// Label.lib.ts
export function getVisibilityStyle(hidden?: boolean) {
  return hidden ? "hidden" : "visible";
}

export function getCursorStyle(disabled?: boolean) {
  return disabled ? "not-allowed" : "pointer";
}
