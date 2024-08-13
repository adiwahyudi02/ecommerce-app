import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BrandName from "../BrandName.vue";

describe("BrandName", () => {
  it("renders the brand name correctly", () => {
    const wrapper = mount(BrandName, {
      props: {
        name: "Awesome Brand",
      },
    });
    expect(wrapper.text()).toBe("Awesome Brand");
  });
});
