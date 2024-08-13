import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Rating from "../Rating.vue";

describe("Rating", () => {
  it("renders the rating wrapper", () => {
    const wrapper = mount(Rating, {
      props: {
        amount: 3,
      },
    });

    // Check if the rating wrapper exists
    const ratingWrapper = wrapper.find('[data-testid="rating-wrapper"]');
    expect(ratingWrapper.exists()).toBe(true);
  });
});

// Note: Currently, @nuxt/icon does not support testing source: https://github.com/nuxt/icon/issues/197
