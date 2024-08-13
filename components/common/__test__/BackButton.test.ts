import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BackButton from "../BackButton.vue";

describe("BackButton", () => {
  it("renders with default label", () => {
    const wrapper = mount(BackButton);

    // Check if the button is rendered with the default label
    const label = wrapper.find('[data-testid="back-button-label"]');
    expect(label.text()).toBe("Back");
  });

  it("renders with custom label", () => {
    const wrapper = mount(BackButton, {
      props: { label: "Go Back" }, // Pass a custom label
    });

    // Check if the button is rendered with the custom label
    const label = wrapper.find('[data-testid="back-button-label"]');
    expect(label.text()).toBe("Go Back");
  });

  it("renders the button with an icon", () => {
    const wrapper = mount(BackButton);

    // Check if the icon is rendered
    const icon = wrapper.find('[data-testid="back-button-icon"]');

    expect(icon.exists()).toBe(true); // Verify that the icon element exists
  });
});
