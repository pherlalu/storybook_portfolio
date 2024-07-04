import "@testing-library/jest-dom";
import {
  getColorStyle,
  getCursorStyle,
  getVisibilityStyle,
  getHoverColorStyle,
} from "./Links.lib";

test("getColorStyle returns correct color style", () => {
  expect(getColorStyle("red")).toBe("red");
  expect(getColorStyle()).toBe("#000");
});

test("getCursorStyle returns correct cursor style", () => {
  expect(getCursorStyle(true)).toBe("not-allowed");
  expect(getCursorStyle(false)).toBe("default");
});

test("getVisibilityStyle returns correct visibility style ", () => {
  expect(getVisibilityStyle(true)).toBe("hidden");
  expect(getVisibilityStyle(false)).toBe("visible");
});

test("getHoverColorStyle returns correct hover color style", () => {
  expect(getHoverColorStyle(true, "red")).toBe("grey");
  expect(getHoverColorStyle(false, "red")).toBe("red");
  expect(getHoverColorStyle(false)).toBe("#3b8026");
});
