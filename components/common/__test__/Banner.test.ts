import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Banner from "../Banner.vue";

describe("Banner", () => {
  it("renders Loading component when isLoading is true", () => {
    const wrapper = mount(Banner, {
      props: { isLoading: true, data: [] },
    });

    // Check if the Loading component is rendered
    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
  });

  it("renders NoData component when there is no data and isLoading is false", () => {
    const wrapper = mount(Banner, {
      props: { isLoading: false, data: [] },
    });

    // Check if the NoData component is rendered
    const noData = wrapper.find('[data-testid="no-data"]');
    expect(noData.exists()).toBe(true);
    expect(noData.text()).toContain("There is no banner list");
  });

  it("renders Swiper when there is data and isLoading is false", () => {
    const mockData = [
      { src: "image1.webp", alt: "Image 1" },
      { src: "image2.webp", alt: "Image 2" },
    ];

    const wrapper = mount(Banner, {
      props: { isLoading: false, data: mockData },
    });

    // Check if the Swiper component is rendered
    expect(wrapper.find('[data-testid="swiper"]').exists()).toBe(true);

    // Check if the correct number of SwiperSlide components are rendered
    const slides = wrapper.findAll('[data-testid="swiper-slide"]');
    expect(slides.length).toBe(mockData.length);

    // Check if images are rendered correctly
    mockData.forEach((item, index) => {
      const img = slides[index].find("img");
      expect(img.attributes("src")).toMatch(item.src);
      expect(img.attributes("alt")).toMatch(item.alt);
    });
  });
});
