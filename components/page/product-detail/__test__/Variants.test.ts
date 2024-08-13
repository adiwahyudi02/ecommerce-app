import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Variants from "../Variants.vue";

describe("Variants", () => {
  const props = {
    labelVariant: "Choose a Variant",
    labelSubVariant: "Choose a Sub-Variant",
    variantButtonList: [
      { label: "Variant 1", value: "variant1" },
      { label: "Variant 2", value: "variant2" },
    ],
    subVariantButtonList: [
      { label: "Sub-Variant 1", value: "sub-variant1" },
      { label: "Sub-Variant 2", value: "sub-variant2" },
    ],
    selectedVariant: "variant1",
    selectedSubVariant: "sub-variant1",
  };

  it("renders variant and sub-variant labels", () => {
    const wrapper = mount(Variants, {
      props,
    });

    const variantLabel = wrapper.find('[data-testid="variant-label"]');
    const subVariantLabel = wrapper.find('[data-testid="sub-variant-label"]');

    expect(variantLabel.text()).toBe(props.labelVariant);
    expect(subVariantLabel.text()).toBe(props.labelSubVariant);
  });

  it("renders the correct number of buttons in ButtonList for variants", () => {
    const wrapper = mount(Variants, {
      props,
    });

    const variantButtonList = wrapper.find(
      '[data-testid="variant-button-list"]',
    );
    expect(variantButtonList.exists()).toBe(true);
    expect(variantButtonList.findAll('[data-testid="button"]').length).toBe(
      props.variantButtonList.length,
    );
  });

  it("renders the correct number of buttons in ButtonList for sub-variants", () => {
    const wrapper = mount(Variants, {
      props,
    });

    const subVariantButtonList = wrapper.find(
      '[data-testid="sub-variant-button-list"]',
    );
    expect(subVariantButtonList.exists()).toBe(true);
    expect(subVariantButtonList.findAll('[data-testid="button"]').length).toBe(
      props.subVariantButtonList.length,
    );
  });

  it("emits onSelectedVariant when a variant button is clicked", async () => {
    const wrapper = mount(Variants, {
      props,
    });

    const variantButtonList = wrapper.find(
      '[data-testid="variant-button-list"]',
    );
    const buttons = variantButtonList.findAll('[data-testid="button"]');

    await buttons[1].trigger("click"); // Click the second variant button

    expect(wrapper.emitted()["onSelectedVariant"]).toBeTruthy();
    expect(wrapper.emitted<unknown[]>()["onSelectedVariant"][0][0]).toEqual(
      props.variantButtonList[1],
    );
  });

  it("emits onSelectedSubVariant when a sub-variant button is clicked", async () => {
    const wrapper = mount(Variants, {
      props,
    });

    const subVariantButtonList = wrapper.find(
      '[data-testid="sub-variant-button-list"]',
    );
    const buttons = subVariantButtonList.findAll('[data-testid="button"]');

    await buttons[0].trigger("click"); // Click the first sub-variant button

    expect(wrapper.emitted()["onSelectedSubVariant"]).toBeTruthy();
    expect(wrapper.emitted<unknown[]>()["onSelectedSubVariant"][0][0]).toEqual(
      props.subVariantButtonList[0],
    );
  });
});
