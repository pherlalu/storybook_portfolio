import "@testing-library/jest-dom";
import { getCursorStyle, getVisibilityStyle } from "./Label.lib";

test("getCursorStyle returns correct cursor style", () => {
  expect(getCursorStyle(true)).toBe("not-allowed");
  expect(getCursorStyle(false)).toBe("pointer");
});

test("getVisibilityStyle returns correct visibility", () => {
  expect(getVisibilityStyle(true)).toBe("hidden");
  expect(getVisibilityStyle(false)).toBe("visible");
});
