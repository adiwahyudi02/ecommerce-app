import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import DefaultLayout from "../default.vue";

describe("DefaultLayout", () => {
  it("renders the Navbar component", () => {
    const wrapper = mount(DefaultLayout);

    // Check if the Navbar component is rendered
    const navbar = wrapper.find('[data-testid="navbar"]');
    expect(navbar.exists()).toBe(true);
  });

  it("renders slot content", () => {
    const slotContent = "This is some content";
    const wrapper = mount(DefaultLayout, {
      slots: {
        default: slotContent,
      },
    });

    // Check if the slot content is rendered
    expect(wrapper.html()).toContain(slotContent);
  });

  it("has the correct structure", () => {
    const wrapper = mount(DefaultLayout);

    // Check the layout structure
    expect(wrapper.find('[data-testid="default-layout"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="default-layout-main"]').exists()).toBe(
      true,
    );
    expect(
      wrapper.find('[data-testid="default-layout-content"]').exists(),
    ).toBe(true);
  });
});
