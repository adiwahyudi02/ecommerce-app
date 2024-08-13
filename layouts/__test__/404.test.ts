import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NotFound from "../404.vue";

describe("NotFound", () => {
  it("renders the NotFound component correctly", () => {
    const wrapper = mount(NotFound);

    // Check for the presence of the heading
    expect(wrapper.find("h1").text()).toBe("Oops! Page Not Found");

    // Check for the presence of the paragraph
    expect(wrapper.find("p").text()).toBe(
      "Sorry, the page you are looking for does not exist.",
    );

    // Test if the slot content is rendered
    const slotContent =
      '<div data-testid="slot-content">Custom Slot Content</div>';
    const wrapperWithSlot = mount(NotFound, {
      slots: {
        default: slotContent,
      },
    });

    expect(wrapperWithSlot.find('[data-testid="slot-content"]').exists()).toBe(
      true,
    );
    expect(wrapperWithSlot.find('[data-testid="slot-content"]').text()).toBe(
      "Custom Slot Content",
    );
  });
});
