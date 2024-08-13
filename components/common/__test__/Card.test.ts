import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Card from "../Card.vue";

describe("Card", () => {
  it("renders correctly with default slot content", () => {
    const wrapper = mount(Card, {
      slots: {
        default: "<p>Card content</p>", // Sample slot content
      },
    });

    // Check if the slot content is rendered
    expect(wrapper.text()).toContain("Card content");
    // Check if the card has the correct class
    expect(wrapper.classes()).toContain("card");
  });

  it("renders without any slot content", () => {
    const wrapper = mount(Card);

    // Check if the card renders correctly without slot content
    expect(wrapper.exists()).toBe(true);
  });
});
