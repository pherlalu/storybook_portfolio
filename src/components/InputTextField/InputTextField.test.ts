import "@testing-library/jest-dom";
import {
  getBackgroundColor,
  getTextColor,
  getDisplayStyle,
} from "./InputTextField.lib";

test("getBackgroundColor returns correct background color", () => {
  expect(getBackgroundColor(true, "blue")).toBe("#fafafa");
  expect(getBackgroundColor(false, "blue")).toBe("blue");
});

test("getTextColor returns correct text color", () => {
  expect(getTextColor(true, "red")).toBe("#cbcbcb");
  expect(getTextColor(false, "red")).toBe("red");
});

test("getDisplayStyle returns correct display style", () => {
  expect(getDisplayStyle(true)).toBe("none");
  expect(getDisplayStyle(false)).toBe("block");
});
