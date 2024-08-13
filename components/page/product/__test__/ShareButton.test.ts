import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ShareButton from "../ShareButton.vue";

describe("ShareButton", () => {
  it("renders with default label", () => {
    const wrapper = mount(ShareButton);
    expect(wrapper.text()).toBe("Share");
  });

  it("renders with provided label", () => {
    const wrapper = mount(ShareButton, {
      props: {
        shareLabel: "Share this product",
      },
    });
    expect(wrapper.text()).toBe("Share this product");
  });

  it("emits onShare event when button is clicked", async () => {
    const wrapper = mount(ShareButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("onShare")).toHaveLength(1);
  });

  it("passes the variant and is-full props to the Button component", () => {
    const wrapper = mount(ShareButton);
    const button = wrapper.find("button");
    expect(button.attributes("class")).toContain("button--outline");
    expect(button.attributes("class")).toContain("button--isFull");
  });
});
