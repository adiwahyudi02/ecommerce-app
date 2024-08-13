import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "../Button.vue";

describe("Button", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" }, // Add content to the button
    });

    // Check if the button renders with default props
    expect(wrapper.classes()).toContain("button");
    expect(wrapper.classes()).toContain("button--primary");
    expect(wrapper.classes()).toContain("button--md");
    expect(wrapper.text()).toBe("Click me");
  });

  it("renders correctly with outline variant", () => {
    const wrapper = mount(Button, {
      props: { variant: "outline" },
      slots: { default: "Click me" },
    });

    // Check if the button has the correct variant class
    expect(wrapper.classes()).toContain("button--outline");
  });

  it("renders correctly with transparent variant", () => {
    const wrapper = mount(Button, {
      props: { variant: "transparent" },
      slots: { default: "Click me" },
    });

    // Check if the button has the correct variant class
    expect(wrapper.classes()).toContain("button--transparent");
  });

  it("renders correctly with small size", () => {
    const wrapper = mount(Button, {
      props: { size: "sm" },
      slots: { default: "Click me" },
    });

    // Check if the button has the correct size class
    expect(wrapper.classes()).toContain("button--sm");
  });

  it("renders correctly with isFull prop", () => {
    const wrapper = mount(Button, {
      props: { isFull: true },
      slots: { default: "Click me" },
    });

    // Check if the button has the correct isFull class
    expect(wrapper.classes()).toContain("button--isFull");
  });

  it("renders correctly with larger sizes", () => {
    const wrapper = mount(Button, {
      props: { size: "xl" },
      slots: { default: "Click me" },
    });

    // Check if the button has the correct size class
    expect(wrapper.classes()).toContain("button--xl");
  });
});
