import "@testing-library/jest-dom";
import { getCursorStyle } from "./Button.lib";

test("getCursorStyle returns 'not-allowed' when the button is disabled", () => {
  const result = getCursorStyle(true);
  expect(result).toBe("not-allowed");
});

test("getCursorStyle returns 'pointer' when the button is not disabled", () => {
  const result = getCursorStyle(false);
  expect(result).toBe("pointer");
});
