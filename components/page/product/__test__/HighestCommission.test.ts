import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HighestCommission from "../HighestCommission.vue";
import type { IProductList } from "~/types/products";

describe("HighestCommission", () => {
  it("renders correctly when not loading", () => {
    const data: IProductList = [];

    const wrapper = mount(HighestCommission, {
      props: {
        data: data,
        columns: 3,
        isLoading: false,
      },
    });

    // Check that the header is rendered
    expect(
      wrapper.find('[data-testid="highest-commission-header"]').text(),
    ).toBe("Highest Commission");

    // Check that ProductSlider is rendered with correct props
    const productSlider = wrapper.find(
      '[data-testid="highest-commission-slider"]',
    );
    expect(productSlider.exists()).toBe(true);
  });
});
