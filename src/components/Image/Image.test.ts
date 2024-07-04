import "@testing-library/jest-dom";
// Image.test.ts
import { getOpacityStyle, getDisplayStyle, getCursorStyle } from "./Image.lib";

test("getOpacityStyle returns correct opacity style based on disabled prop", () => {
  expect(getOpacityStyle(true)).toBe("0.5");
  expect(getOpacityStyle(false)).toBe("1");
});

test("getDisplayStyle returns correct display style based on hidden prop", () => {
  expect(getDisplayStyle(true)).toBe("none");
  expect(getDisplayStyle(false)).toBe("block");
});

test("getCursorStyle returns correct cursor style based on disabled prop", () => {
  expect(getCursorStyle(true)).toBe("not-allowed");
  expect(getCursorStyle(false)).toBe("pointer");
});
