import "@testing-library/jest-dom";
import { getColorStyle, getCursorStyle, getVisibilityStyle } from "./Text.lib";

test("getColorStyle returns correct color style based on color prop", () => {
  expect(getColorStyle("red")).toBe("red");
  expect(getColorStyle()).toBe("#000");
});

test("getCursorStyle returns correct cursor style based on disabled prop", () => {
  expect(getCursorStyle(true)).toBe("not-allowed");
  expect(getCursorStyle(false)).toBe("default");
});

test("getVisibilityStyle returns correct visibility style based on hidden prop", () => {
  expect(getVisibilityStyle(true)).toBe("hidden");
  expect(getVisibilityStyle(false)).toBe("visible");
});
