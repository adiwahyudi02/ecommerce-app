import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProductDescription from "../Description.vue";

describe("ProductDescription", () => {
  it("renders the description label correctly", () => {
    const wrapper = mount(ProductDescription, {
      props: {
        description: "This is a sample product description.",
      },
    });

    // Check if the label is rendered
    const label = wrapper.find('[data-testid="description-label"]');
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Product Description");
  });

  it("renders the description text correctly", () => {
    const sampleDescription = "This is a sample product description.";
    const wrapper = mount(ProductDescription, {
      props: {
        description: sampleDescription,
      },
    });

    // Check if the description text is rendered
    const description = wrapper.find('[data-testid="description"]');
    expect(description.exists()).toBe(true);
    expect(description.text()).toBe(sampleDescription);
  });
});
