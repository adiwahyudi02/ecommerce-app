import getErrorMessage from "@/utils/getErrorMessage";
import { describe, expect, it } from "vitest";

describe("getErrorMessage", () => {
  it("returns the message from an ErrorWithMessage object", () => {
    const error = { message: "This is a custom error message" };
    expect(getErrorMessage(error)).toBe("This is a custom error message");
  });

  it("returns a JSON string from non-Error objects", () => {
    const error = { code: 404, details: "Not Found" };
    expect(getErrorMessage(error)).toMatch(
      /{"code":404,"details":"Not Found"}/,
    );
  });

  it("returns a string representation of simple values", () => {
    expect(getErrorMessage("A string error")).toBe('"A string error"');
    expect(getErrorMessage(42)).toBe("42");
    expect(getErrorMessage(null)).toBe("null");
  });

  it("handles errors thrown during stringification", () => {
    const error = { message: "This is a message" };
    const result = getErrorMessage(error);
    expect(result).toBe("This is a message");
  });
});
