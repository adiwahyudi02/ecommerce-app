import setLocalStorage from "@/utils/setLocalStorage";
import { beforeEach, describe, expect, it } from "vitest";

describe("setLocalStorage", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it("sets the value in localStorage", () => {
    const key = "testKey";
    const value = { name: "John Doe", age: 30 };

    setLocalStorage(key, value);

    const item = window.localStorage.getItem(key);
    expect(item).toBe(JSON.stringify(value));
  });

  it("does nothing when called on the server-side", () => {
    const originalWindow = window;

    // Simulate server-side environment by temporarily overriding window
    // @ts-ignore
    global.window = undefined;

    const key = "testKey";
    const value = { name: "John Doe", age: 30 };

    // Call the function; it should not throw an error
    setLocalStorage(key, value);

    // Restore the original window object
    global.window = originalWindow;

    // Check localStorage to see if the key was not set
    expect(window.localStorage.getItem(key)).toBe(null);
  });
});
