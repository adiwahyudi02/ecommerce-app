import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AddShopButton from "../AddShopButton.vue";

describe("AddShopButton", () => {
  it("renders with default label", () => {
    const wrapper = mount(AddShopButton);
    expect(wrapper.text()).toBe("Add to shop");
  });

  it("renders with provided label", () => {
    const wrapper = mount(AddShopButton, {
      props: {
        addLabel: "Add to cart",
      },
    });
    expect(wrapper.text()).toBe("Add to cart");
  });

  it("emits onAdd event when button is clicked", async () => {
    const wrapper = mount(AddShopButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("onAdd")).toHaveLength(1);
  });

  it("passes is-full prop to the Button component", () => {
    const wrapper = mount(AddShopButton);
    expect(wrapper.find("button").attributes("class")).toContain(
      "button--isFull",
    );
  });
});
