import rupiahPrefix from "@/utils/rupiahPrefix";
import { describe, expect, it } from "vitest";

describe("rupiahPrefix", () => {
  it("adds Rp. prefix to a number", () => {
    const amount = 10000;
    const result = rupiahPrefix(amount);
    expect(result).toBe("Rp. 10000");
  });

  it("adds Rp. prefix to a string", () => {
    const amount = "5000";
    const result = rupiahPrefix(amount);
    expect(result).toBe("Rp. 5000");
  });

  it("handles zero as input", () => {
    const amount = 0;
    const result = rupiahPrefix(amount);
    expect(result).toBe("Rp. 0");
  });

  it("handles negative numbers", () => {
    const amount = -5000;
    const result = rupiahPrefix(amount);
    expect(result).toBe("Rp. -5000");
  });
});
