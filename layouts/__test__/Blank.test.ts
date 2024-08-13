import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BlankLayout from "../blank.vue";

describe("BlankLayout", () => {
  it("renders correctly", () => {
    const wrapper = mount(BlankLayout, {
      slots: {
        default: "<p>Test Content</p>",
      },
    });

    // Check if the layout and its elements are rendered
    expect(wrapper.find('[data-testid="blank-layout"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="blank-layout-main"]').exists()).toBe(
      true,
    );
    expect(wrapper.find('[data-testid="blank-layout-content"]').exists()).toBe(
      true,
    );

    // Check if the slot content is rendered
    expect(wrapper.find('[data-testid="blank-layout-content"]').text()).toBe(
      "Test Content",
    );
  });
});
