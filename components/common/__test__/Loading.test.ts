import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Loading from "../Loading.vue";

describe("Loading", () => {
  it("renders default slot content when no slot is provided", () => {
    const wrapper = mount(Loading);

    // Check if the default slot content is rendered
    expect(wrapper.text()).toContain("Loading...");
    // Check if the loading class is applied
    expect(wrapper.classes()).toContain("loading");
  });

  it("renders provided slot content", () => {
    const wrapper = mount(Loading, {
      slots: {
        default: "<p>Custom Loading Message</p>", // Sample slot content
      },
    });

    // Check if the provided slot content is rendered
    expect(wrapper.text()).toContain("Custom Loading Message");
  });
});
