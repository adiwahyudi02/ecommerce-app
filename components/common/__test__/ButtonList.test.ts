import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ButtonList from "../ButtonList.vue";

describe("ButtonList", () => {
  const buttons = [
    { label: "Button 1", value: "button1" },
    { label: "Button 2", value: "button2" },
    { label: "Button 3", value: "button3" },
  ];

  it("renders the correct number of buttons", () => {
    const wrapper = mount(ButtonList, {
      props: { buttons },
    });

    const buttonElements = wrapper.findAll('[data-testid="button"]');
    expect(buttonElements.length).toBe(buttons.length);
  });

  it("applies primary variant to the selected button", () => {
    const wrapper = mount(ButtonList, {
      props: { buttons, selected: "button2" },
    });

    const buttonElements = wrapper.findAll('[data-testid="button"]');
    console.log("asdf", buttonElements);

    expect(buttonElements[1].classes()).toContain("button--primary");
    expect(buttonElements[0].classes()).toContain("button--outline");
    expect(buttonElements[2].classes()).toContain("button--outline");
  });

  it("emits onSelected event with the correct button when clicked", async () => {
    const wrapper = mount(ButtonList, {
      props: { buttons },
    });

    const buttonElements = wrapper.findAll('[data-testid="button"]');
    await buttonElements[1].trigger("click");

    expect(wrapper.emitted("onSelected")).toBeTruthy();
    expect(wrapper.emitted("onSelected")![0]).toEqual([buttons[1]]);
  });
});
