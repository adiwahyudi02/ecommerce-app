import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from "vitest";
import { useInfiniteScroll } from "@/composables/useInfiniteScroll"; // Adjust the import path as needed

describe("useInfiniteScroll", () => {
  let fetchNextPage: Mock;
  let isShouldFetch: boolean;

  beforeEach(() => {
    fetchNextPage = vi.fn(); // Create a mock for fetchNextPage
    isShouldFetch = true; // Set isShouldFetch to true for the test

    // Mock the scrollHeight and clientHeight properties
    Object.defineProperty(document.documentElement, "scrollHeight", {
      writable: true,
      configurable: true,
      value: 2000, // Set the scroll height
    });

    Object.defineProperty(document.documentElement, "clientHeight", {
      writable: true,
      configurable: true,
      value: 1000, // Set the client height
    });

    // Initialize scrollTop
    Object.defineProperty(document.documentElement, "scrollTop", {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks();
  });

  it("should call fetchNextPage when scrolled near the bottom", () => {
    // Arrange
    const { enableInfiniteScroll } = useInfiniteScroll({
      fetchNextPage,
      isShouldFetch,
    });

    // Act
    enableInfiniteScroll();

    // Simulate scrolling near the bottom
    document.documentElement.scrollTop = 900; // Set scrollTop to 900
    window.dispatchEvent(new Event("scroll")); // Trigger the scroll event

    // Assert
    expect(fetchNextPage).toHaveBeenCalledTimes(1); // Check if fetchNextPage was called
  });

  it("should not call fetchNextPage when isShouldFetch is false", () => {
    // Arrange
    isShouldFetch = false; // Set isShouldFetch to false
    const { enableInfiniteScroll } = useInfiniteScroll({
      fetchNextPage,
      isShouldFetch,
    });

    // Act
    enableInfiniteScroll();

    // Simulate scrolling near the bottom
    document.documentElement.scrollTop = 900; // Set scrollTop to 900
    window.dispatchEvent(new Event("scroll")); // Trigger the scroll event

    // Assert
    expect(fetchNextPage).toHaveBeenCalledTimes(0); // Check that fetchNextPage was not called
  });

  it("should not call fetchNextPage when not scrolled near the bottom", () => {
    // Arrange
    const { enableInfiniteScroll } = useInfiniteScroll({
      fetchNextPage,
      isShouldFetch,
    });

    // Act
    enableInfiniteScroll();

    // Simulate scrolling far from the bottom
    document.documentElement.scrollTop = 500; // Set scrollTop to 500
    window.dispatchEvent(new Event("scroll")); // Trigger the scroll event

    // Assert
    expect(fetchNextPage).toHaveBeenCalledTimes(0); // Check that fetchNextPage was not called
  });
});
