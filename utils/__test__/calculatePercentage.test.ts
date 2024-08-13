import calculatePercentage from "@/utils/calculatePercentage";
import { describe, expect, it } from "vitest";

describe("calculatePercentage", () => {
  it("calculates the percentage of a part from a total", () => {
    expect(calculatePercentage(50, 200)).toBe("25%");
    expect(calculatePercentage(1, 4)).toBe("25%");
    expect(calculatePercentage(0, 100)).toBe("0%");
    expect(calculatePercentage(100, 100)).toBe("100%");
    expect(calculatePercentage(75, 300)).toBe("25%");
  });

  it("handles edge cases", () => {
    expect(calculatePercentage(0, 0)).toBe("NaN%"); // Division by zero case
    expect(calculatePercentage(50, 0)).toBe("Infinity%"); // Division by zero case
  });
});
