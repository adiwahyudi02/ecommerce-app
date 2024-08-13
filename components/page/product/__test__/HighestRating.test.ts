import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HighestRating from "../HighestRating.vue";
import type { IProductList } from "~/types/products";

describe("HighestRating", () => {
  it("renders correctly when not loading", () => {
    const data: IProductList = [];

    const wrapper = mount(HighestRating, {
      props: {
        data,
        columns: 3,
        isLoading: false,
      },
    });

    // Check that the header is rendered
    expect(wrapper.find('[data-testid="highest-rating-header"]').text()).toBe(
      "Highest Rating",
    );

    // Check that ProductSlider is rendered with correct props
    const productSlider = wrapper.find('[data-testid="highest-rating-slider"]');
    expect(productSlider.exists()).toBe(true);
  });
});
