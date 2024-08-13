import getLocalStorage from "@/utils/getLocalStorage";
import { beforeEach, describe, expect, it } from "vitest";

describe("getLocalStorage", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it("returns the initial value if the key does not exist", () => {
    const initialValue = "default value";
    const result = getLocalStorage("nonExistingKey", initialValue);
    expect(result).toBe(initialValue);
  });

  it("returns the value from localStorage if the key exists", () => {
    const key = "existingKey";
    const value = { name: "John Doe", age: 30 };
    window.localStorage.setItem(key, JSON.stringify(value));

    const result = getLocalStorage(key, { name: "", age: 0 });
    expect(result).toEqual(value);
  });

  it("parses the value as JSON", () => {
    const key = "jsonKey";
    const value = { isActive: true };
    window.localStorage.setItem(key, JSON.stringify(value));

    const result = getLocalStorage(key, { isActive: false });
    expect(result).toEqual(value);
  });

  it("returns initial value when called on the server-side", () => {
    // Mocking window to be undefined (simulating server-side)
    const originalWindow = window;
    // @ts-ignore
    global.window = undefined;

    const initialValue = "server default value";
    const result = getLocalStorage("nonExistingKey", initialValue);
    expect(result).toBe(initialValue);

    // Restore the original window object
    global.window = originalWindow;
  });
});
