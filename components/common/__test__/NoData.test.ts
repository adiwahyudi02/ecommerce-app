import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NoData from "../NoData.vue";

describe("NoData", () => {
  it("renders default slot content when no slot is provided", () => {
    const wrapper = mount(NoData);

    // Check if the default slot content is rendered
    expect(wrapper.text()).toContain("No Data List");
    // Check if the noData class is applied
    expect(wrapper.classes()).toContain("nodata");
  });

  it("renders provided slot content", () => {
    const wrapper = mount(NoData, {
      slots: {
        default: "<p>No items available</p>", // Sample slot content
      },
    });

    // Check if the provided slot content is rendered
    expect(wrapper.text()).toContain("No items available");
  });
});
